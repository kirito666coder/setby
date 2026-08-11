import Button from '@/components/Button';
import CargoTransparent from './components/CargoTransparent';

export default function AboutSection() {
  return (
    <div className="-mt-39 md:-mt-49.5">
      <div className="w-screen">
        <div className="relative">
          <div className="sticky top-0 z-10 h-0">
            <div
              id="about-cargo"
              style={{
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
              }}
              className="h-screen overflow-hidden"
            >
              <CargoTransparent />
            </div>
          </div>

          <section id="about" className="z-30 h-screen overflow-hidden">
            <div className="h-39 md:h-49" />
            <div className="bg-setby absolute z-30 flex h-[70vh] w-screen flex-col items-center justify-center gap-10 text-white">
              <h4 className="flex h-10 items-center justify-center gap-1 font-semibold uppercase">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15.2053C0 15.1233 0.0379421 15.046 0.102749 14.9959L19.4218 0.0558116C19.5958 -0.0787019 19.8484 0.045275 19.8484 0.265159V14.1515C19.8484 14.2335 19.8104 14.3108 19.7456 14.3609L0.426542 29.301C0.252603 29.4355 0 29.3115 0 29.0916V15.2053Z"
                    fill="white"
                  />
                </svg>
                about setby
              </h4>
              <h4 className="w-[90Vw] text-center text-3xl font-semibold md:w-[83vw] md:text-7xl">
                We bring architecture to life through craft and innovation. Trusted by architects
                who demand precision, beauty, and care.
              </h4>
              <Button text="Who we are" color="black" />
            </div>
          </section>
          <div id="about-2" className="-mt-22 h-screen" />
          <div id="about-3" className="h-screen bg-blue-600" />
        </div>
      </div>
    </div>
  );
}
