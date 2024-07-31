import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-between p-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7c3aed] to-[#2e1065] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="h-full flex flex-col items-center justify-center space-y-12 md:space-y-0">
        <h1 className="text-8xl md:text-9xl text-white text-center font-black tracking-tighter">
          Filipi Rafael
        </h1>
        <h2 className="text-5xl md:text-6xl text-white/80 text-center font-extrabold mt-6 tracking-tighter">
          Mobile Software Enginner | React Native
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between align-center mt-6">
          <h2 className="text-2xl md:text-3xl text-white text-center font-light tracking-tighter">
            Mobile Engineer.
          </h2>
          <h2 className="text-2xl md:text-3xl text-white text-center font-light tracking-tighter">
            Based in São Paulo, Brazil.
          </h2>
        </div>
      </div>

      <Image
        className="absolute top-0 bottom-0 left-0 right-0 m-auto z-[-1] opacity-50 md:opacity-100"
        src="/hero-avatar.svg"
        alt="Memoji"
        width={482}
        height={528}
        priority
      />

      <div className="w-full flex flex-row space-x-4 justify-center items-center mt-6">
        <a
          href="https://www.linkedin.com/in/filipi-rafael-developer/"
          target="_blank">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="fill-white w-16 md:w-24 h-16 md:h-24 rounded-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.292C0 1.026 1.052 0 2.35 0H29.65C30.948 0 32 1.026 32 2.292V29.708C32 30.974 30.948 32 29.65 32H2.35C1.052 32 0 30.974 0 29.708V2.292ZM9.886 26.788V12.338H5.084V26.788H9.886ZM7.486 10.364C9.16 10.364 10.202 9.256 10.202 7.868C10.172 6.45 9.162 5.372 7.518 5.372C5.874 5.372 4.8 6.452 4.8 7.868C4.8 9.256 5.842 10.364 7.454 10.364H7.486ZM17.302 26.788V18.718C17.302 18.286 17.334 17.854 17.462 17.546C17.808 16.684 18.598 15.79 19.926 15.79C21.664 15.79 22.358 17.114 22.358 19.058V26.788H27.16V18.5C27.16 14.06 24.792 11.996 21.632 11.996C19.084 11.996 17.942 13.396 17.302 14.382V14.432H17.27C17.2806 14.4153 17.2913 14.3986 17.302 14.382V12.338H12.502C12.562 13.694 12.502 26.788 12.502 26.788H17.302Z" />
          </svg>
        </a>
        <a href="https://github.com/FilipiRafael" target="_blank">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="fill-white w-16 md:w-24 h-16 md:h-24 rounded-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0.395996C7.16 0.395996 0 7.56 0 16.396C0 23.4667 4.584 29.4627 10.94 31.576C11.74 31.7267 12.0333 31.232 12.0333 30.8067C12.0333 30.4267 12.02 29.42 12.0133 28.0867C7.56267 29.052 6.624 25.94 6.624 25.94C5.896 24.0933 4.844 23.6 4.844 23.6C3.39467 22.608 4.956 22.628 4.956 22.628C6.56267 22.74 7.40667 24.276 7.40667 24.276C8.83333 26.7227 11.152 26.016 12.0667 25.6067C12.2107 24.572 12.6227 23.8667 13.08 23.4667C9.52667 23.0667 5.792 21.6907 5.792 15.56C5.792 13.8133 6.412 12.3867 7.43867 11.2667C7.25867 10.8627 6.71867 9.236 7.57867 7.032C7.57867 7.032 8.91867 6.60266 11.9787 8.672C13.2587 8.316 14.6187 8.14 15.9787 8.132C17.3387 8.14 18.6987 8.316 19.9787 8.672C23.0187 6.60266 24.3587 7.032 24.3587 7.032C25.2187 9.236 24.6787 10.8627 24.5187 11.2667C25.5387 12.3867 26.1587 13.8133 26.1587 15.56C26.1587 21.7067 22.4187 23.06 18.8587 23.4533C19.4187 23.9333 19.9387 24.9147 19.9387 26.4133C19.9387 28.5547 19.9187 30.2747 19.9187 30.7947C19.9187 31.2147 20.1987 31.7147 21.0187 31.5547C27.42 29.456 32 23.456 32 16.396C32 7.56 24.836 0.395996 16 0.395996Z" />
          </svg>
        </a>
        <a href="https://x.com/FilipiRafael3" target="_blank">
          <svg
            width="48"
            height="48"
            viewBox="0 0 32 32"
            className="fill-white w-16 md:w-24 h-16 md:h-24 rounded-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9467 7.99999C28.92 8.46666 27.8133 8.77333 26.6667 8.92C27.84 8.21333 28.7467 7.09333 29.1733 5.74666C28.0667 6.41333 26.84 6.88 25.5467 7.14666C24.4933 6 23.0133 5.33333 21.3333 5.33333C18.2 5.33333 15.64 7.89333 15.64 11.0533C15.64 11.5067 15.6933 11.9467 15.7867 12.36C11.04 12.12 6.81333 9.83999 4 6.38666C3.50666 7.22666 3.22666 8.21333 3.22666 9.25333C3.22666 11.24 4.22666 13 5.77333 14C4.82666 14 3.94666 13.7333 3.17333 13.3333V13.3733C3.17333 16.1467 5.14666 18.4667 7.76 18.9867C6.92097 19.2163 6.04012 19.2482 5.18666 19.08C5.5488 20.2166 6.25805 21.2112 7.21468 21.9239C8.17132 22.6366 9.32726 23.0316 10.52 23.0533C8.49817 24.6539 5.99199 25.5191 3.41333 25.5067C2.96 25.5067 2.50666 25.48 2.05333 25.4267C4.58666 27.0533 7.6 28 10.8267 28C21.3333 28 27.1067 19.28 27.1067 11.72C27.1067 11.4667 27.1067 11.2267 27.0933 10.9733C28.2133 10.1733 29.1733 9.16 29.9467 7.99999Z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/filipirafaeldev/" target="_blank">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="fill-white w-16 md:w-24 h-16 md:h-24 rounded-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4 2.66667H21.6C25.8667 2.66667 29.3333 6.13334 29.3333 10.4V21.6C29.3333 23.651 28.5186 25.618 27.0683 27.0683C25.618 28.5186 23.651 29.3333 21.6 29.3333H10.4C6.13333 29.3333 2.66666 25.8667 2.66666 21.6V10.4C2.66666 8.349 3.48142 6.38199 4.93171 4.93171C6.38199 3.48143 8.34899 2.66667 10.4 2.66667ZM10.1333 5.33334C8.86029 5.33334 7.63939 5.83905 6.73922 6.73923C5.83904 7.6394 5.33333 8.8603 5.33333 10.1333V21.8667C5.33333 24.52 7.48 26.6667 10.1333 26.6667H21.8667C23.1397 26.6667 24.3606 26.161 25.2608 25.2608C26.161 24.3606 26.6667 23.1397 26.6667 21.8667V10.1333C26.6667 7.48001 24.52 5.33334 21.8667 5.33334H10.1333ZM23 7.33334C23.442 7.33334 23.8659 7.50893 24.1785 7.82149C24.4911 8.13405 24.6667 8.55798 24.6667 9.00001C24.6667 9.44203 24.4911 9.86596 24.1785 10.1785C23.8659 10.4911 23.442 10.6667 23 10.6667C22.558 10.6667 22.134 10.4911 21.8215 10.1785C21.5089 9.86596 21.3333 9.44203 21.3333 9.00001C21.3333 8.55798 21.5089 8.13405 21.8215 7.82149C22.134 7.50893 22.558 7.33334 23 7.33334ZM16 9.33334C17.7681 9.33334 19.4638 10.0357 20.714 11.286C21.9643 12.5362 22.6667 14.2319 22.6667 16C22.6667 17.7681 21.9643 19.4638 20.714 20.7141C19.4638 21.9643 17.7681 22.6667 16 22.6667C14.2319 22.6667 12.5362 21.9643 11.286 20.7141C10.0357 19.4638 9.33333 17.7681 9.33333 16C9.33333 14.2319 10.0357 12.5362 11.286 11.286C12.5362 10.0357 14.2319 9.33334 16 9.33334ZM16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12Z" />
          </svg>
        </a>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7c3aed] to-[#2e1065] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </main>
  );
}
