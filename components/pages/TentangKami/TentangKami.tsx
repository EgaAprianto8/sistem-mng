import React from "react";

const TentangKami = () => {
  const ImageURL = [
    {
      image: "https://i.ibb.co/Pxf2P4H/Tentang-Kami.png"
    }
  ];
  const backgroundImageStyle = {
    backgroundImage: `url(${ImageURL[0].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-full">
      <div className="bg-[#f5f5f5] w-full px-4 sm:px-10 md:px-20 border"> {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col lg:flex-row gap-10 container justify-center w-full">
          <div>
            <div className="relative w-full md:w-[450px] h-[300px] lg:h-[600px] -mt-20 bg-[#64748b] shadow-xl rounded-md" style={backgroundImageStyle}></div> {/* Adjusted width and height for responsiveness */}
          </div>
          <div className="flex flex-col gap-10 w-full justify-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5488c4]"> Menyediakan</h1> {/* Adjusted font size for responsiveness */}
              <p className="text-lg">
                Buku-buku Pelajaran Sekolah dan Kebutuhan Sekolah Lainnya
              </p>
            </div>
            <div className="flex flex-col gap-4"> {/* Added flex-wrap for responsiveness */}
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5488c4]">Alamat</h1> {/* Adjusted font size for responsiveness */}
                <p className="text-lg">
                  Jl. Ir. Juanda No. 36 Kota Tasikmalaya
                </p>
              </div>
            </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5488c4]">Kontak</h1> {/* Adjusted font size for responsiveness */}
                <p className="text-lg">
                Tel. (0265) 7070655 
                <br/>
                HP. 0812 1480 476
                <br/>
                Email : cvmedianusagemilang@yahoo.com
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
