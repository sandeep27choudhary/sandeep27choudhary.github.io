export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="space-y-10">
          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Book a Consultation</h1>
            <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Pick a time slot that works for you. You&apos;ll receive a calendar invite with meeting details.
            </p>
          </header>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
            <iframe
              src="https://cal.com/sandeepchoudhary?theme=dark"
              width="100%"
              height="750px"
              frameBorder="0"
              title="Booking Calendar"
              className="block w-full"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
