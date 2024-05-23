import Image from "next/image";
import React from "react";
import message from "../assets/message.png";

function Empty() {
    return (
      <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
        <Image src={message} alt="message" width={200} height={200} />
      </div>
    );
}

export default Empty;
