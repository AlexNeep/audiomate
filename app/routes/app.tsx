import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCopy } from "react-icons/io5";
import Header from "~/components/Header";

export const loader = () => {
  const text =
    "Here is some perfectly formatted text\n\n Hello this is a new line?";
  return json({ text });
};

const App = () => {
  const loaderData = useLoaderData();
  const { text } = loaderData;

  const fetcher = useFetcher();
  const [duration, setDuration] = useState(0);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[] | null>(null);

  console.log(fetcher.data);

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
      fetcher.submit(form, {
        method: "post",
        encType: "multipart/form-data",
        action: "/api/tts",
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

  return (
    <div className="grid h-screen grid-rows-8">
      <div className="w-full">
        <Header user={undefined} />
      </div>

      <section className="relative row-span-6 mx-2 rounded-lg bg-white p-2 text-gray-900 shadow">
        <button className="absolute right-0 top-0 flex items-center justify-center gap-2 rounded-bl-lg rounded-tr-lg bg-orange-500 px-3 py-2 text-gray-800">
          <IoCopy size="20" />
        </button>
        <textarea
          className="h-full w-full resize-none pt-10 outline-none"
          value={text}
          contentEditable={false}
          readOnly
        />
      </section>

      <section className="row-span-1 flex w-full items-center justify-center">
        <div
          className={`w-fit rounded-3xl p-4 shadow-lg transition-colors duration-500 ${
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
      </section>
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
