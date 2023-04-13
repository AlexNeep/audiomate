import { useUser } from "@clerk/remix";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { IoCopyOutline, IoShareOutline } from "react-icons/io5";
import { MdOutlineRedo, MdOutlineUndo } from "react-icons/md";
import Header from "~/components/Header";

const App = () => {
  const fetcher = useFetcher();
  const [versions, setVersions] = useState<string[]>([]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState<null | number>(
    null
  );
  const [inputText, setInputText] = useState("");
  const [textEditMode, setTextEditMode] = useState(false);
  const text = fetcher?.data?.text;
  const currentVersion = versions[currentVersionIndex ?? versions.length - 1];

  useEffect(() => {
    if (text) {
      setVersions((curr) => [...curr, text]);
      setCurrentVersionIndex(null);
    }
  }, [text]);

  const error =
    fetcher?.data?.error &&
    (typeof fetcher?.data?.error === "string"
      ? fetcher?.data?.error
      : "Something went wrong");
  const isLoading =
    fetcher.state === "submitting" || fetcher.state === "loading";

  const [duration, setDuration] = useState(0);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[] | null>(null);

  useEffect(() => {
    if (recording && duration > 120) changeRecording();
  }, [duration]);

  function changeRecording() {
    if (recording) {
      stopRecording(mediaRecorder);
    } else {
      startRecording({
        setMediaRecorder,
        setAudioChunks,
        setDuration,
        setTimer,
      });
    }
    setRecording(!recording);
  }

  useEffect(() => {
    if (audioChunks) {
      const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });

      submitForm(audioBlob);

      cleanUp();
    }
  }, [audioChunks]);

  function submitForm(audioBlob?: Blob) {
    const form = new FormData();
    if (audioBlob) form.append("audio", audioBlob);
    form.append("input_text", inputText);
    form.append("past_text", currentVersion);
    fetcher.submit(form, {
      method: "post",
      encType: "multipart/form-data",
      action: "/api/generate-text",
    });
  }

  function cleanUp() {
    setMediaRecorder(null);
    setAudioChunks(null);
    if (timer) clearInterval(timer);
    setTimer(null);
    setDuration(0);
  }

  useEffect(() => {
    const AudioRecorder = require("audio-recorder-polyfill");
    window.MediaRecorder = AudioRecorder;
  }, []);

  const isLeftArrowDisabled =
    versions.length === 0 || currentVersionIndex === 0;
  const isRightArrowDisabled =
    typeof currentVersionIndex !== "number" ||
    currentVersionIndex === versions.length - 1;

  return (
    <div className="grid h-screen grid-rows-8 gap-4 pb-4">
      <div className="w-full">
        <Header />
      </div>

      <section className="relative row-span-6 mx-2 rounded-lg bg-white text-gray-900 shadow lg:mx-auto lg:w-full lg:max-w-xl">
        <div className="absolute z-10 flex h-12 w-full items-center justify-center ">
          <button
            className="absolute left-0 top-0 flex h-full items-center justify-center gap-2 rounded-br-lg rounded-tl-lg bg-orange-500 px-3 py-2 text-gray-800"
            onClick={() => {
              if (!currentVersion) return;
              navigator.share({ text: currentVersion });
            }}
          >
            <IoShareOutline size="20" />
          </button>

          <button
            className="absolute right-0 top-0 flex h-full items-center justify-center gap-2 rounded-bl-lg rounded-tr-lg bg-orange-500 px-3 py-2 text-gray-800"
            onClick={() => {
              if (!currentVersion) return;
              navigator.clipboard.writeText(currentVersion);
              alert("Copied");
            }}
          >
            <IoCopyOutline size="20" />
          </button>

          {versions.length > 1 && (
            <div className="flex h-full w-full items-center justify-center gap-2 text-center">
              <button
                className="flex items-center justify-center gap-2 rounded bg-gray-200 px-2 py-1 shadow"
                disabled={isLeftArrowDisabled}
                onClick={() =>
                  setCurrentVersionIndex((curr) => {
                    if (curr) return Math.max(curr - 1, 0);
                    return Math.max(versions.length - 2, 0);
                  })
                }
              >
                <MdOutlineUndo
                  size="20"
                  className={`shrink-0  ${
                    isLeftArrowDisabled ? "text-gray-400" : "text-gray-700"
                  }`}
                />
                Undo
              </button>

              <button
                className="flex items-center justify-center gap-2 rounded bg-gray-200 p-1 shadow"
                disabled={isRightArrowDisabled}
                onClick={() =>
                  setCurrentVersionIndex((curr) => {
                    if (curr) return Math.min(curr + 1, versions.length - 1);
                    return 1;
                  })
                }
              >
                <MdOutlineRedo
                  size="20"
                  className={`shrink-0   ${
                    isRightArrowDisabled ? "text-gray-400" : "text-gray-700"
                  }`}
                />
                Redo
              </button>
            </div>
          )}
        </div>
        <div className="relative flex h-full w-full resize-none items-center justify-center pt-12 outline-none">
          <textarea
            className="h-full w-full resize-none px-4 py-2 outline-none"
            value={currentVersion}
            contentEditable={false}
            placeholder={`Click the record button below and say some instructions.\n\nYou will then be able to make further edits.`}
            readOnly
          />
          {isLoading && (
            <p className="absolute top-1/2 flex -translate-y-1/2 transform flex-col items-center justify-center gap-4">
              <span>Loading</span>
              <CgSpinner
                className="flex-shrink-0 animate-spin  text-orange-500"
                size="30"
              />
            </p>
          )}
        </div>
      </section>

      {textEditMode ? (
        <section className="relative row-span-1 flex w-full items-center justify-center px-2">
          <div className="rounded bg-gray-200 p-2 shadow">
            <HiOutlineMicrophone
              size="25"
              onClick={() => setTextEditMode(false)}
              className="text-gray-900"
            />
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.currentTarget.value)}
            className="m-4 h-full w-full resize-none rounded p-2 shadow outline-none"
            onKeyDown={(e) => {
              if (e.keyCode === 13 && !e.shiftKey) submitForm();
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="border border-transparent p-2"
            disabled={isLoading}
            onClick={() => submitForm()}
          >
            <IoMdSend
              size="20"
              className={` transition-colors duration-100 ${
                prompt.length > 0 ? "fill-gray-50" : "fill-gray-800"
              }`}
            />
          </button>
        </section>
      ) : (
        <section className="relative row-span-1 flex w-full items-center justify-center">
          <Microphone
            recording={recording}
            changeRecording={changeRecording}
            duration={duration}
          />

          {recording ? (
            <p className="absolute right-10 top-1/2 -translate-y-1/2 transform text-lg">
              {duration} seconds{" "}
            </p>
          ) : (
            <button
              onClick={() => setTextEditMode(true)}
              className="absolute right-10 top-1/2 -translate-y-1/2 transform  rounded-xl bg-gray-200  p-3 text-gray-800 shadow "
            >
              <BiEdit size="20" className="shrink-0" />
            </button>
          )}
        </section>
      )}

      {error && (
        <p className="rounded bg-red-200 px-2 py-1 text-center font-semibold shadow">
          {error}
        </p>
      )}
    </div>
  );
};

export default App;

function startRecording({
  setMediaRecorder,
  setAudioChunks,
  setDuration,
  setTimer,
}: {
  setMediaRecorder: React.Dispatch<React.SetStateAction<MediaRecorder | null>>;
  setAudioChunks: React.Dispatch<React.SetStateAction<Blob[] | null>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>;
}) {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then((stream) => {
      const localMediaRecorder: MediaRecorder = new MediaRecorder(stream);

      localMediaRecorder.start();
      const timer = setInterval(() => {
        setDuration((curr) => curr + 1);
      }, 1000);
      setTimer(timer);

      localMediaRecorder.addEventListener("dataavailable", (event) => {
        console.log("Recording stopped, data available");
        setAudioChunks((prev) => [...(prev ?? []), event.data]);
      });

      setMediaRecorder(localMediaRecorder);
    });
}

function stopRecording(mediaRecorder: MediaRecorder | null) {
  if (!mediaRecorder) {
    console.error("mediaRecorder is not defined");
    return;
  }

  mediaRecorder.stop();
  mediaRecorder.stream.getAudioTracks().forEach((track) => track.stop());
}

const Microphone = ({
  changeRecording,
  recording,
  duration,
}: {
  changeRecording: () => void;
  recording: boolean;
  duration: number;
}) => {
  return (
    <div
      className={`cols-span-1 mx-auto w-fit rounded-xl p-4 shadow-lg transition-colors duration-500 ${
        recording
          ? duration % 2
            ? "bg-red-500"
            : "bg-red-100"
          : "bg-orange-500"
      }`}
    >
      <HiOutlineMicrophone
        onClick={changeRecording}
        size="40"
        className=" shrink-0  text-gray-800"
      />
    </div>
  );
};
