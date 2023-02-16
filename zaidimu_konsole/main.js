const view = document.getElementById("view");
const hello = document.querySelector(".hellomsg");
const bye = document.querySelector(".byemsg");
const iframe = document.getElementById("iframe");


  function onOff () {
    console.log("on off");
    if (view.classList.contains("off")) {
        view.classList.remove("off");
        hello.classList.remove("off");
        if (!iframe.classList.contains("off")) {
            iframe.classList.add("off");
        }
    }else {
        hello.classList.add("off");
        bye.classList.remove("off");
        iframe.classList.add("off");
        turnOff();
    }
  };
  function goTv () {
    console.log("tv");
    iframe.classList.remove("off");
    iframe.src="https://www.youtube.com/embed/y-28CssnqEE";
    iframe.title="YouTube video player";
  };
  function goBack () {
    console.log("back");
    iframe.classList.add("off");
  };
  function goShop () {
    console.log("shop");
  };
  function goGoogle () {
    console.log("google");
    iframe.classList.remove("off");
    iframe.src="https://www.google.com/search?igu=1";
    iframe.title="Google";
  };
  function turnOff () {
    setTimeout(()=> {
        view.classList.add("off");
    },2000)
  }