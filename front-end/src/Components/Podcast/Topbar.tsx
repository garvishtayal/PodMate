import React from "react";

function Topbar() {
  return (
    <>
      <div className="flex h-full items-center justify-between px-10">
        <div className="">LOGO</div>

        <div className="flex bg-blue-700justify-around">
          <div className="mr-5">HOME</div>
          <div className="">PROFILE</div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
