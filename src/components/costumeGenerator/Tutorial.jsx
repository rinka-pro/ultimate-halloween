export default function Tutorial({ tutorial, title }) {
  return (
    <section className="relative mx-auto mt-10 max-w-5xl rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 to-neutral-950 px-4 pt-6 text-stone-200 shadow-lg md:p-12">
      <h2 className="mb-4 max-w-3xl pb-2 text-2xl capitalize text-amber-500 md:text-4xl">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="mb-6 w-full self-start p-4 md:sticky md:top-4 md:mb-0 md:w-1/3 md:p-6">
          <h3 className="mb-4 pb-2 text-xl text-amber-500 md:text-3xl">
            What You'll Need
          </h3>
          {tutorial.materials?.clothing.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Clothing
              </h4>
              <ul className="list-inside list-disc space-y-1 pl-0 marker:text-amber-500">
                {tutorial.materials?.clothing.map((item, index) => (
                  <li key={`clothes${index}`}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {tutorial.materials?.accessories.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Accessories
              </h4>
              <ul className="list-inside list-disc space-y-1 pl-0 marker:text-amber-500">
                {tutorial.materials?.accessories.map((item, index) => (
                  <li key={`accessories${index}`}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {tutorial.materials?.makeup.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Makeup &amp; Hair
              </h4>
              <ul className="list-inside list-disc space-y-1 pl-0 marker:text-amber-500">
                {tutorial.materials?.makeup.map((item, index) => (
                  <li key={`makeup${index}`}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="w-full p-4 md:w-2/3 md:p-6">
          <h3 className="mb-4 pb-2 text-xl text-amber-500 md:text-3xl">
            Step-by-Step Guide
          </h3>
          {tutorial.steps?.costume_base.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Costume Base
              </h4>
              <ol className="list-decimal space-y-2 pl-6 marker:text-amber-500">
                {tutorial.steps?.costume_base.map((item, index) => (
                  <li key={`costume${index}`}>{item}</li>
                ))}
              </ol>
            </>
          )}
          {tutorial.steps?.accessories.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Accessories &amp; Details
              </h4>
              <ol className="list-decimal space-y-2 pl-6 marker:text-amber-500">
                {tutorial.steps?.accessories.map((item, index) => (
                  <li key={`details${index}`}>{item}</li>
                ))}
              </ol>
            </>
          )}
          {tutorial.steps?.makeup.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-lg text-stone-200 md:text-xl">
                Makeup &amp; Hair
              </h4>
              <ol className="list-decimal space-y-2 pl-6 marker:text-amber-500">
                {tutorial.steps?.makeup.map((item, index) => (
                  <li key={`makeupsteps${index}`}>{item}</li>
                ))}
              </ol>
            </>
          )}
          {tutorial.pro_tip.length > 0 && (
            <div className="mt-8 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
              <strong className="text-amber-300">🕯️ Pro Tip:</strong>{' '}
              {tutorial.pro_tip}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
