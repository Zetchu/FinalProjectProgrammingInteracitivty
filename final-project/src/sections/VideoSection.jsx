import VideoComponent from '../components/VideoComponent';

function VideoSection() {
  return (
    <section className=' py-20 sm:py-24 lg:py-20'>
      <div className='grid lg:grid-cols-2'>
        <div className=''>
          <h1
            className='text-2xl sm:text-3xl lg:text-4xl
             font-bold text-left
             my-4 lg:my-0'
          >
            Medium long section heading goes here
          </h1>
        </div>
        <div className=''>
          <p className='font-light text-left'>
            See how teams wire up a production-ready AI assistant in under five
            minutes. We cover auth, streaming UI, tool calls, and safe
            fallbacks. The walkthrough highlights common pitfalls and how to
            avoid them in real apps.
          </p>

          <p className='font-light text-left mt-3'>
            The demo uses our Starter plan limits and real-world prompts, so
            performance and costs match what you’ll see in your app. We also
            show budget caps and alerts so you never get surprised by usage.
          </p>

          <p className='font-light text-left mt-3'>
            Prefer your stack? We include Next.js and Flask examples, plus a
            pure REST flow you can copy into any backend. Each example ships
            with tests and environment templates for one-click deploys.
          </p>
        </div>
      </div>
      <VideoComponent />
    </section>
  );
}

export default VideoSection;
