export default function DoorAnim(props) {

    const doorPortal = {
        backgroundColor: "#333",
        position: "relative",
        width: "10vw",
        height: "15vw",
        margin: "2vw",
        marginTop: "50px"
    }

    let door = {
        backgroundColor: "saddlebrown",
        position: "absolute",
       
        width: "10vw",
        height: "15vw",
        transformOrigin: "left",
        transition: "all 0.5s ease-in-out"
    }

    if (props.didFind === true) {
        door.transform = "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg)"
    }

  return (
    <>
      <div style = {doorPortal}>
        <div style = {door} />
      </div>
    </>
  );
}
