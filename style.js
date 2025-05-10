const products = [
    {
      name: "iPhone 15 Pro Max",
      price: "27,800,000 ກີບ",
      desc: "ຊີບ A17 Pro ສຸດແຮງໆ ໜ້າຈໍ 6.1 ນີ້ວ ພ້ອມກ້ອງ 48MP",
      images: [
        "../img/iphone-15-pro-max-blue-titanium-256gb-back.jpg",
        "../img/iPhone-15-Pro_Black-Titanium-square_small.png",
        "../img/iphone-15-pro-736876_600x.webp",
      ],
    },
    {
      name: "Samsung Galaxy S24",
      price: "22,600,000 ກີບ",
      desc: "ກ້ອງ AI 200MP ຈໍ AMOLED ພ້ອມແບັດ 5000mAh",
      images: [
        "../img/sm_s928_galaxys24ultra_front_titaniumblack_231109_ecommerce_9c87.webp",
        "../img/pk-galaxy-s24-s928-519417-sm-s928blbcpkd-543035325.webp",
        "../img/Samsung - Galaxy-S24-ULTRA-YELLOW-5G - 8-square_medium-Photoroom.png",
      ],
    },
    {
      name: "ROG Phone 9 Pro",
      price: "25,950,000 ກີບ",
      desc: "ຊີບ Snapdragon 8 Elte ຈໍ LTPO AMOLED ພ້ອມແບັດ 5000mAh ກັບສາກໄວ 165w",
      images: [
        "../img/C9615203-EAB2-40D4-AB1F-2BA1521B4A98 (1).png",
        "../img/rog-phone-9_6.jpg",
        "../img/w260.png",
      ],
    },
    {
      name: "Apple iad Air 13",
      price: "18,799,000 ກີບ",
      desc: "ຊີບ Apple M3 ຈໍ 13 ນີ້ວ ພ້ອມແບັດ 7606mAh ຄວາມຈຳ 8+512",
      images: [
        "../img/ipad-air-storage-select-202405-13inch-starlight-wifi_FMT_WHH.jpg",
        "../img/ipad-air-finish-select-gallery-202405-13inch-purple-wificell_FMT_WHH.jpg",
        "../img/ipad-air-finish-select-gallery-202405-13inch-blue-wifi.jpg",
      ],
    },
    {
      name: "Vivo x200 ultra",
      price: "24,000,000 ກີບ",
      desc: "ຊີບ Snapdragon 8 Elte ຈໍ LTPO AMOLED ກ້ອງເທມ 200MP  ພ້ອມແບັດ 6000mAh ສາກໄວ 100w ",
      images: [
        "../img/vivo_x100_ultra_titanium_1715671644669.webp",
        "../img/vivo-smartphone-x200-pro-16512gb-titanium-grey-1-square_medium.webp " ,
        "../img/images.jpg",
      ],
    },
    {
      name: "Xiaomi 15 ultra",
      price: "27,900,000 ກີບ",
      desc: "ຊີບ Snapdragon 8 Elte ຈໍ LTPO AMOLED ກ້ອງໂຄດເທມ   ພ້ອມແບັດ 5410mAh ສາກໄວ 90w ",
      images: [
        "../img/images (1).jpg",
        "../img/30a39f4e9ab34e836b96843f3b238872!400x400!85.png " ,
        "../img/images (2).jpg",
      ],
    },
    {
      name: "Xiaomi 15 ultra",
      price: "27,900,000 ກີບ",
      desc: "ຊີບ Snapdragon 8 Elte ຈໍ LTPO AMOLED ກ້ອງໂຄດເທມ   ພ້ອມແບັດ 5410mAh ສາກໄວ 90w ",
      images: [
        "../img/Nothing Phone.jpeg ",
        "../img/images (2).jpeg " ,
        "../img/103523576_1659608114.jpg",
      ],
    },
    {
      name: "Xiaomi 15 ultra",
      price: "27,900,000 ກີບ",
      desc: "ຊີບ Snapdragon 8 Elte ຈໍ LTPO AMOLED ກ້ອງໂຄດເທມ   ພ້ອມແບັດ 5410mAh ສາກໄວ 90w ",
      images: [
        "../img/297f1b1e0ecd41611acfffe2442f6b72.png",
        "../img/251c6031e6ef2a499dfc12fed5b5265a.png" ,
        "../img/SYA002635904B.jpg",
      ],
    },
  ];
  
  function openModal(index) {
    const product = products[index];
    document.getElementById("modalTitle").innerText = product.name;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalDesc").innerText = product.desc;
  
    const mainImage = document.getElementById("mainImage");
    const thumbs = document.getElementById("thumbnails");
  
    mainImage.src = product.images[0];
    thumbs.innerHTML = "";
  
    product.images.forEach((img, i) => {
      const thumb = document.createElement("img");
      thumb.src = img;
      if (i === 0) thumb.classList.add("active");
      thumb.onclick = () => {
        mainImage.src = img;
        document.querySelectorAll(".thumbs img").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      };
      thumbs.appendChild(thumb);
    });
  
    document.getElementById("productModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("productModal").style.display = "none";
  }
  