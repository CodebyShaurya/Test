import React, { useEffect, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import handOnGuitar from "../assets/HandOnGuitar.png";
import audioSymbol from "../assets/AudioSymbol.png";
import audioControls from "../assets/AudioControls.png";
import playButton from "../assets/PlayButton.png";

const Learnings = () => {
  const [record, setRecord] = useState(false);
  const [mic, setMic] = useState("OFF");
  const [listen, setListen] = useState("Listen");
  // const [wordData, setWordData] = useState(null);
  const [output, setOutput] = useState(null);
  const [transcripts, setTranscripts] = useState(["", "", ""]);
  const [percentages, setPercentages] = useState(["", "", ""]);
  const [showButton, setShowButton] = useState(false);

  const fetchVoice = () => {
    setRecord(true);
    setListen("Listening");
    setTranscripts(["First Attempt", "", ""]); // Assuming you have an array of length 3 for transcripts
    setPercentages(["", "", ""]); // Assuming you have an array of length 3 for percentages
    console.log("try");
    fetch("http://localhost:5000/record", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          setRecord(false);
          setListen("Listen");
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setOutput(data);
        setRecord(false);
        setListen("Listen");

        const updatedTranscripts = [...transcripts];
        const updatedPercentages = [...percentages];

        const index = updatedTranscripts.findIndex(
          (transcript) => transcript === ""
        );
        if (index !== -1) {
          updatedTranscripts[index] = data.transcript;
          updatedPercentages[index] = data.percentage;

          setTranscripts(updatedTranscripts);
          setPercentages(updatedPercentages);

          const allFilled = updatedTranscripts.every(
            (transcript) => transcript !== ""
          );
          if (allFilled) {
            setShowButton(true);
          }
        }
      })
      .finally(() => {
        setTimeout(() => {
          setRecord(false);
        }, 4000);
      });

    console.log("try2");
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[75vw] p-10 bg-[#0a183d]">
          <div className="h-[80vh] bg-white relative border-2 border-black flex items-center justify-center gap-20 p-4">
            <div className="absolute bottom-0 left-2 font-bold text-xl">
              Recommended Videos
            </div>
            <div className="flex flex-col gap-14 absolute left-[10%]">
              <div className="text-7xl font-bold text-[#FC0353]">E</div>
              <div className="text-7xl font-bold">G</div>
              <div className="text-7xl font-bold">D</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 pl-24">
              <div>
                <img
                  src={handOnGuitar}
                  alt="Hand on Guitar"
                  className="h-[300px] w-[500px]"
                />
              </div>
              <div>
                {/* <img
                  src={audioSymbol}
                  alt="Symbol of Audio"
                  className="h-[50px] w-[400px]"
                /> */}
                {record ? (
                  <div className="loader">
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                  </div>
                ) : (
                  <div className="loader2">
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                    <div className="stroke2"></div>
                  </div>
                )}
              </div>
              <div>
                { record ? (
                  <img
                    src={audioControls}
                    alt="Audio Controls"
                    id="audioControls"
                    className="h-[60px] w-[60px]"
                  />
                ) : (
                  <img
                    onClick={fetchVoice}
                    src={playButton}
                    alt="Audio Controls"
                    id="audioControls"
                    className="h-[60px] w-[60px]"
                  />
                )
                }
              </div>
            </div>
          </div>
          <div className="h-[25vh] flex border-black p-2 pr-0  gap-2">
            <div className="h-[100%] min-w-[345px] border-2 border-black rounded-sm">
              {" "}
              <iframe
                width="345"
                height="100%"
                src="https://www.youtube.com/embed/yh6sPqDEZCY"
                title="Super Easy First Guitar Lesson - Guitar Lessons For Beginners - Stage 1 - The D Chord"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="h-[100%] min-w-[345px] border-2 border-black rounded-sm">
              {" "}
              <iframe
                width="345"
                height="100%"
                src="https://www.youtube.com/embed/8H393ryDkuY"
                title="E Chord - Easy Third Guitar Chord - Beginner Guitar Lessons Stage 1 - JustinGuitar [BC-113]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="h-[100%] min-w-[345px] border-2 border-black rounded-sm">
              {" "}
              <iframe
                width="345"
                height="100%"
                src="https://www.youtube.com/embed/gEzwpqmt2gc"
                title="G Chord - Guitar For Beginners - Stage 3 Guitar Lesson - JustinGuitar [BC-131]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* <div className="h-[100%] min-w-[400px] border-2 border-black rounded-sm"></div> */}
          </div>
        </div>
        <div className="w-[25vw]  bg-[#D5D5D5] p-4 flex flex-col gap-2">
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox0" />
              <label for="myCheckbox0" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox1" />
              <label for="myCheckbox1" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox2" />
              <label for="myCheckbox2" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox3" />
              <label for="myCheckbox3" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox4" />
              <label for="myCheckbox4" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox5" />
              <label for="myCheckbox5" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox6" />
              <label for="myCheckbox6" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox7" />
              <label for="myCheckbox7" className="w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnings;
