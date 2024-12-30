import Socials from './Socials';
import Photo from './Photo';

export default function HomePage() {
  return (
    <main>
      <section className="h-full pt-8">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24 lg:px-32 \">
            {/* Hero Text */}
            <div className="text-center lg:text-left order-2 lg:order-none">
              <p className="text-lg mb-1">Aspiring Cloud Architect</p>
              <h1 className="mb-6 text-5xl font-semibold">Hello! I&apos;m<br /><span className="text-fd-accent hover:text-fd-accent-hover">Murtaza</span>.</h1>
              <p className="max-w-[500px] mb-3 text-foreground">Passionate about <span className="text-yellow-600 dark:text-yellow-200 font-bold">creating</span> and <span className="text-blue-600 dark:text-blue-300 font-bold">deploying</span> various technologies, with an emphasis on <span className="text-purple-600 dark:text-purple-400 font-bold">user experience</span>. Ideally, technology should be <span className="text-green-600 dark:text-green-400 font-bold">accessible</span>.</p>

              <p className="max-w-[500px] mb-9 text-foreground">This is an online portfolio/blog/cv to document my progress and share some knowledge.</p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-col items-center lg:flex-row gap-6">
                <Socials styles='flex text-fd-muted-foreground text-4xl hover:text-fd-foreground hover:transition-all duration-500'/>
              </div>
            
            </div>
            {/* Hero Image */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo href="/assets/me.webp" alt="Murtaza" />
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
