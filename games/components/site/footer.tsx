/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Footer() {



  return (
    
    <div className="relative isolate overflow-hidden bgcolor2 py-16 sm:py-24 lg:py-32 text-left">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Votre partenaire croissance</h2>
            <p className="mt-4 text-lg leading-8 text-white">
            Inscrivez-vous à la newsletter des Neo entrepreneurs et recevez une pépite chaque semaine.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Adresse Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Entrez votre adresse email"
              />
              <button
                type="submit"
                className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold bgcolor1 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Souscrire
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">

          <Link href = '../Connexion'> 
            <div className="flex flex-col items-start">
              <div className="rounded-md bgcolor1 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Se connecter</dt> 
              <dd className="mt-2 leading-7 text-white">
                Connez-vous pour sauvegarder vos meilleurs scores et vous mesurer aux autres joueurs.
              </dd>
            </div> 
          </Link>

          <Link href = '../Inscription'> 
            <div className="flex flex-col items-start">
              <div className="rounded-md bgcolor1 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">S&apos;inscrire</dt>
              <dd className="mt-2 leading-7 text-white">
                Pas encore de compte ? Inscrivez-vous et montrez au monde vos capacité de mémorisation.
              </dd>
            </div>
          </Link>

          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
