import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
{/* header */}
      <header className="text-gray-700 border-b border-gray-300">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a herf="#home" className="font-medium text-gray-900 mb-4,md:mb-0 w-1/6">
            <img src="./img/cheru__jp.png" alt="cheru.jp"/>
          </a>
          <nav className="md:ml-auto text-base">
            <a herf="#AboutMe" className="mr-5 hover:text-blue-400 duration-300">About me</a>
          </nav>
        </div>
      </header>

{/* home */}
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3ml sm:text-6xl text-gray-900 font-medium">
              Hi!  I'm cheru.
            </h1>
            <p className="mt-8 mb-8 leading-relaxed">
              Site for girl who like computers a little bit.<br/>
              Includes skills, each account, technical and hobby blogs, etc.
            </p>
{/* contactボタンからメールを送れるようにする */}
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration:300">Contact</button>   
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-auto">
            <img src="./img/icon.jpeg" alt="cheru-icon" className="rounded-full"/>
          </div>
        </div>
      </section>

{/* about me */}
      <section id="AboutMe">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2x; sm:text-3xl font-medium mb-2 text-gray-900">About Me</h1>
              <p className="pb-2">
                cheru's profile
              </p>
          </div>
          <div>
            <div className="flex -m-4 flex-wrap">
              {/* 現在の所属 */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">現在の所属</h2>
                    </div>
                    <div>
                    <p>
                      {/* mdでかけると嬉しい */}
                    </p>
                    </div>
                </div>
              </div>
              {/* 経歴 */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">経歴</h2>
                    </div>
                    <div>
                    <p>
                      {/* mdでかけると嬉しい */}
                    </p>
                    </div>
                </div>
              </div>
              {/* 参加歴 */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 9.44771 16.5523 9 16 9H8Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">参加歴</h2>
                    </div>
                    <div>
                    <p>
                      {/* mdでかけると嬉しい */}
                    </p>
                    </div>
                </div>
              </div>
              {/* アカウント */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">アカウント</h2>
                    </div>
                    <div>
                      <p>
                      Twitter(𝕏) : <a href= "https://twitter.com/cheru__jp" className="text-blue-400 hover:text-orange-500 duration-300">@cheru__jp</a><br/>
                      Discord : cheru<br/>
                      Github : <a href= "https://github.com/CHERU333" className="text-blue-400 hover:text-orange-500 duration-300">@CHERU333</a><br/>
                      Zenn : <a href= "https://zenn.dev/cheru" className="text-blue-400 hover:text-orange-500 duration-300">@cheru</a><br/>
                      Email : pi@cheru.jp
                      </p>
                    </div>
                </div>
              </div>
              {/* 資格 */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">資格</h2>
                    </div>
                    <div>
                    <p>
                      {/* mdでかけると嬉しい */}
                    </p>
                    </div>
                </div>
              </div>
              {/* 布教 */}
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 rouded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                        fill="currentColor"
                      />
                    </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">布教</h2>
                    </div>
                    <div>
                    <p>
                      {/* mdでかけると嬉しい */}
                    </p>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
