import { AiOutlineStar } from "react-icons/ai";
import PodcastList from "./PodcastList";

function Main() {
  return (
    <>
      {" "}
      <div className="mb-40">
        <p className=" text-sm mb-3 text-gray-300">APP NAME</p>
        <p className="text-4xl md:text-6xl md:w-7/12 mb-4 font-bold">
          Higher Ground ft. Naomi Wild
        </p>

        <div className="flex">
          {/*  */}
          <div className=" my-auto mr-2">
            <AiOutlineStar className="text-gray-400" />
          </div>
          {/*  */}
          <div className="flex gap-2 text-sm">
            <div>
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1691902354~exp=1691902954~hmac=1c58c5ce945a6501243e3b6eca8fc03bd2f68fc0fa4c7bf5ab05a48b311a96d7"
                alt=""
                className=" w-7 h-7 border-2 border-cyan-700 rounded-full"
              />
            </div>

            <div className="my-auto">
              <span className="text-gray-300">Posten by </span>Author
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="text-sm mb-4">COMING NEXT</div>

        <div>
          <PodcastList />
          <PodcastList />
          <PodcastList />
        </div>
      </div>
    </>
  );
}

export default Main;
