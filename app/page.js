import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <HeroSection/>
      <div className="flex gap-12 items-center justify-center flex-wrap my-8">
        <div>
          <Link href="/and">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">01.</span>
                  <p>AND Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/and.png" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/or">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">02.</span>
                  <p>OR Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/or.png" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/nand">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">03.</span>
                  <p>NAND Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/nand.png" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/nor">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">04.</span>
                  <p>NOR Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/nor.png" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/xor">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">05.</span>
                  <p>XOR Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/xor.png" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/xnor">
            <div className="card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-title">06.</span>
                  <p>XNOR Gate.</p>
                </div>
                <div className="card-bottom">
                  <p>Learn More...</p>
                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-image">
                <img width="128" viewBox="0 -960 960 960" height="128" src="/xnor.png" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
