import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const calculateSlideWidth = () => {
    if (window.innerWidth >= 1024) {
      return 100 / 4;
    } else if (window.innerWidth >= 768) {
      return 100 / 3;
    } else {
      return 100 / 2;
    }
  };

  useEffect(() => {
    const updateSlider = () => {
      if (sliderRef.current) {
        const slideWidth = calculateSlideWidth();
        sliderRef.current.style.transform = `translateX(-${
          currentIndex * slideWidth
        }%)`;
      }
    };

    updateSlider();

    const handleResize = () => {
      updateSlider();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    if (sliderRef.current) {
      const totalSlides = sliderRef.current.children.length;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const totalSlides = sliderRef.current.children.length;
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden p-0">
      <div
        ref={sliderRef}
        className="flex gap-8 transition-transform duration-500 ease-in-out"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 shadow-md rounded-lg p-3 max-w-xs"
          >
            <img
              src="https://picsum.photos/180/220"
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg mb-2"
            />
            <h2 className="text-base font-bold">
              Monumen peninggalan {index + 1}
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              deserunt perferendis iure autem asperiores rerum ea dolorum quasi.
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default function DetailDestinasi() {
  return (
    <main className="bg-[#FCFFF0]">
      {/* Section hero Start  */}

      <section>
        <div className="w-full h-80 bg-[url('https://www.celebes.co/wp-content/uploads/2019/10/Tentang-Bukit-Kasih-Kanonang.jpg')] bg-cover bg-center flex flex-col justify-center items-center gap-5 md:h-96 lg:h-120 lg:items-start lg:p-8 min-w-[200px]">
          <h1 className="text-xl font-bold text-gray-300 md:text-5xl lg:text-7xl lg:font-extrabold">
            Bukit kasih, Sulawesi Utara
          </h1>
          <div className="lg:self-center lg:mt-20">
            <button className="bg-[#034C53] py-2 px-8 rounded-full font-medium text-gray-300 hover:cursor-pointer hover:bg-[#023D42] lg:text-xl lg:font-bold lg:py-4 lg:px-10">
              Start Tour 360
            </button>
          </div>
        </div>
      </section>
      {/* Section Hero End  */}

      {/* Section informasi start  */}
      <section className="mt-8 p-2 lg:pt-12 lg:px-16">
        <div className="md:grid md:grid-cols-2 md:gap-2 min-w-[200px]">
          <div className="">
            <h2 className="font-semibold text-xl text-primary md:text-2xl lg:text-4xl">
              Bukit kasih, Sulawesi Utara
            </h2>
            <p className="text-base text-paragraf">
              Bukit Kasih adalah salah satu tempat pariwisata di
              Provinsi Sulawesi Utara. Di Bukit Kasih ini terdapat monumehrletak
              sekitar 55 km arah selatan Manado, tepatnya di Desa Kanonang
              Empat, Kecamatan Kawangkoan Barat, Kabupaten Minahasa
            </p>
            <h3 className="mt-8 font-semibold text-xl text-second mb-2 lg:text-2xl lg:mt-10">
              Fasilitas
            </h3>
            <div className="flex gap-2 justify-center md:justify-start md:gap-4 lg:gap-8">
              <div>
                <span className="text-second font-medium text-base">
                  Parkir umum
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-parking-icon lucide-circle-parking mx-auto"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                </svg>
              </div>

              <div>
                <span className="text-second font-medium text-base">
                  toilet umum
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-toilet-icon lucide-toilet mx-auto"
                >
                  <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" />
                  <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
                </svg>
              </div>

              <div>
                <span className="text-second font-medium text-base">
                  tour guide
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-users-icon lucide-users mx-auto"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <h3 className="font-semibold text-xl text-second lg:text-2xl">
              Informasi Destinasi
            </h3>
            <div className="w-full h-auto bg-[#1D3C34] mx-auto rounded-xl text-white px-2 py-9 mt-2 lg:w-[90%] lg:mx-0 lg:px-8">
              <div className="grid gap-5">
                <div className="flex gap-2 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin-icon lucide-map-pin text-red-500 min-w-[24px]"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Lokasi:</span>
                  <span>
                    Informasi Destinasi lokasi : Desa Kanonang, Kabupaten
                    Minahasa yang berjarak 50 km di sebelah selatan Kota Manado.
                  </span>
                </div>

                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock-icon lucide-clock text-red-500 min-w-[24px]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Jam Buka:</span>
                  <span>06:00 - 15:00</span>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-ticket-icon lucide-ticket text-red-500 min-w-[24px]"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                  <span> Tiket Masuk:</span>
                  <span>Dewasa Rp15.000 anak-anak Rp10.000</span>
                </div>
                <div className="w-full h-52 rounded-xl mt-3 border border-white overflow-hidden sm:h-80 lg:h-80">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="Random Image"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>

        <div className="mt-12">
          <h2 className="font-semibold text-xl text-primary md:text-2xl lg:text-4xl">
            Sejarah Bukit Kasih
          </h2>
          <div className="lg:flex lg:gap-10">
            <div className="w-70 h-70 bg-red-500 my-3 rounded-xl overflow-hidden lg:w-full lg:h-80">
              <img
                src="https://picsum.photos/200/300"
                alt="Random Image"
                className="w-full h-full"
              />
            </div>
            <p className="text-base text-paragraf lg:mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              dolores? Sint fugiat magni reprehenderit in labore laudantium
              quisquam nihil, voluptates enim consectetur inventore libero,
              nobis fugit commodi. Soluta officia iure exercitationem animi
              cumque minima eius incidunt quae, amet suscipit repellat nobis
              quia necessitatibus, voluptate perspiciatis voluptatem praesentium
              nihil earum laboriosam?
            </p>
          </div>
        </div>
      </section>
      {/* {section informasi end} */}

      {/* {Section monumen peninggalan start } */}
      <section className="mt-8 p-2 lg:pt-12 lg:px-16">
        <h2 className="font-semibold text-xl text-primary md:text-2xl lg:text-4xl mt-20">
          Monumen peninggalan
        </h2>
        <Slider />
      </section>

      {/* Section monumen peninggalan end  */}

      {/* Section umkm start  */}
      <section className="mt-8 p-2 lg:pt-12 lg:px-16">
        <h2 className="font-semibold text-xl text-primary md:text-2xl lg:text-4xl">
          UMKM Terdekat
        </h2>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
            <div className="bg-[#1D3C34] shadow-md rounded-lg p-3 max-w-xs hover:cursor-pointer">
              <img
                src="https://picsum.photos/180/220"
                alt="UMKM Image"
                className="w-full rounded-lg mb-2"
              />
              <h2 className="text-base font-semibold text-white">
                produk umkm
              </h2>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis, nam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* {Section umkm end } */}
    </main>
  );
}
