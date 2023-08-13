import { AiOutlineStar } from "react-icons/ai";

function PodcastList() {
  return (
    <div className="flex py-2 border-b border-gray-400 mb-1">
      <div className="my-auto mr-1 ">
        <AiOutlineStar className="text-gray-400" />
      </div>
      <div className="mr-2">
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1691902354~exp=1691902954~hmac=1c58c5ce945a6501243e3b6eca8fc03bd2f68fc0fa4c7bf5ab05a48b311a96d7"
          alt=""
          className="h-6 w-6 rounded-full"
        />
      </div>
      <span className="my-auto text-gray-400 mr-1">
        Doing it for the monday
      </span>
      <span className="my-auto"> Footer the People</span>
    </div>
  );
}

export default PodcastList;
