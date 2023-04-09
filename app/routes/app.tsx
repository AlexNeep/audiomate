import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCopy } from "react-icons/io5";
import Header from "~/components/Header";

const App = () => {
  const fetcher = useFetcher();
  const [versions, setVersions] = useState<string[]>(["1", "2"]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState<null | number>(
    null
  );
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

      const form = new FormData();
      form.append("audio", audioBlob);
      form.append("past_text", currentVersion);
      fetcher.submit(form, {
        method: "post",
        encType: "multipart/form-data",
        action: "/api/generate-text",
      });

      cleanUp();
    }
  }, [audioChunks]);

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

  const isLeftArrowDisabled = currentVersionIndex === 0;
  const isRightArrowDisabled =
    typeof currentVersionIndex !== "number" ||
    currentVersionIndex === versions.length - 1;

  return (
    <div className="grid h-screen grid-rows-8">
      <div className="w-full">
        <Header user={undefined} />
      </div>

      <section className="relative row-span-6 mx-2 rounded-lg bg-white text-gray-900 shadow">
        <div className="absolute z-10 flex h-12 w-full items-center justify-center ">
          <button className="absolute right-0 top-0 flex h-full items-center justify-center gap-2 rounded-bl-lg rounded-tr-lg bg-orange-500 px-3 py-2 text-gray-800">
            <IoCopy size="20" />
          </button>

          <div className="flex h-full w-full items-center justify-center gap-2 text-center">
            <button
              onClick={() =>
                setCurrentVersionIndex((curr) => {
                  console.log(curr, versions);
                  if (curr) return Math.max(curr - 1, 0);
                  return versions.length - 2;
                })
              }
            >
              <BsArrowLeftShort
                size="35"
                className={`shrink-0 rounded-lg bg-gray-200 p-1 ${
                  isLeftArrowDisabled ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </button>
            <p className="w-32 font-semibold">
              {typeof currentVersionIndex === "number"
                ? `Version ${currentVersionIndex + 1}`
                : "Latest version"}
            </p>
            <button
              onClick={() =>
                setCurrentVersionIndex((curr) => {
                  if (curr) return Math.min(curr + 1, versions.length - 1);
                  return 1;
                })
              }
            >
              <BsArrowRightShort
                size="35"
                className={`shrink-0  rounded-lg bg-gray-200 p-1 ${
                  isRightArrowDisabled ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="relative flex h-full w-full resize-none items-center justify-center pt-10 outline-none">
          <textarea
            className="h-full w-full resize-none px-4 py-2"
            value={currentVersion}
            contentEditable={false}
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

      <section className="relative row-span-1 flex w-full items-center justify-center">
        <div
          className={`cols-span-1 mx-auto w-fit rounded-3xl p-4 shadow-lg transition-colors duration-500 ${
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

        {recording && (
          <p className="absolute right-10 top-1/2 -translate-y-1/2 transform text-lg">
            {duration} seconds{" "}
          </p>
        )}
      </section>
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
