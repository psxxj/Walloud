import React from "react";
import NavBar from "../../component/navigator/navBar";

function PageContainer(props: any){
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}

export default PageContainer;