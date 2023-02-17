const view = document.getElementById("view");
const hello = document.querySelector(".hellomsg");
const iframe = document.getElementById("iframe");
const shop = document.getElementById("table");
const produktai = [
  {
      pavadinimas: 'Endless Space 2',
      kaina: '39.99',
      imgsrc: './img/space.jpg'
  },
  {
      pavadinimas: 'Divinity II',
      kaina: '44.99',
      imgsrc: './img/divinity.jpg'
  },
  {
      pavadinimas: 'Stalker: Call of Pripyat',
      kaina: '19.99',
      imgsrc: './img/stalker.jpg'
  },
  {
      pavadinimas: 'Civilization IV',
      kaina: '24.99',
      imgsrc: './img/civ.jpg'
  }
];


  function onOff () {
    console.log("on off");
    if (view.classList.contains("off")) {
        view.classList.remove("off");
        hello.textContent="Hello, do you have time to watch TV? You should be coding.";
        if (!iframe.classList.contains("off")) {
            iframe.classList.add("off");
        }
        if (!shop.classList.contains("off")) {
            shop.classList.add("off");
        }
    }else {
        hello.textContent="Goodbye, back to coding.";
        iframe.classList.add("off");
        shop.classList.add("off");
        turnOff();
    }
  };
  function goTv () {
    console.log("tv");
    if (!shop.classList.contains("off")) {
      shop.classList.add("off");
      iframe.classList.remove("off");
    } else {
      iframe.classList.remove("off");
    };
    iframe.src="https://www.youtube.com/embed/y-28CssnqEE";
    iframe.title="YouTube video player";
  };
  function goBack () {
    console.log("back");
    iframe.classList.add("off");
    shop.classList.add("off");
  };
  function goShop () {
    console.log("shop");
    if (!iframe.classList.contains("off")) {
      iframe.classList.add("off");
      shop.classList.remove("off");
      rodytiProduktus();
    } else {
      shop.classList.remove("off");
      rodytiProduktus();
    }
  };
  function goGoogle () {
    console.log("google");
    if (!shop.classList.contains("off")) {
      shop.classList.add("off");
      iframe.classList.remove("off");
    } else {
      iframe.classList.remove("off");
    };
    iframe.src="https://www.google.com/search?igu=1";
    iframe.title="Google";
  };
  function turnOff () {
    setTimeout(()=> {
        view.classList.add("off");
    },2000)
  }
  const rodytiProduktus = () => {
    document.querySelector('tbody').innerHTML = '';

    produktai.forEach((produktas) => {
        document.querySelector('tbody').innerHTML += `
            <tr class="data-row">
                <td><img src="${produktas.imgsrc}"/></td>
                <td>${produktas.pavadinimas}</td>
                <td>${produktas.kaina}</td>
            </tr>
        `;
    });
}