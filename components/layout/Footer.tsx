export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft border-t border-gray-300">
      <div className="mx-auto w-full max-w-screen-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://vilma-plantas.netlify.app/"
              className="flex items-center"
            >
              <img
                src="/logo.png"
                className="h-15 me-3"
                alt="Vilma Plantas Logo"
              />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                Vilma Plantas
              </span>
            </a>
            <div className="flex items-center mt-2">
              <p className="text-gray-800 text-sm">
                <span className="text-orange-600 font-bold">ATENÇÃO: </span>
                Este é um projeto em fase de desenvolvimento
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Desenvolvedores
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a
                    href="https://tluccas.github.io/Portfolio/"
                    className="hover:underline"
                  >
                    Alves Dev
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Social
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/vilmaplantass/"
                    className="hover:underline "
                  >
                    <i className="bi bi-instagram hover:text-red-400 transition"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lucasalvesz"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Legal
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Em breve
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ......
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2025{" "}
            <a
              href="https://www.linkedin.com/in/lucasalvesz/"
              className="hover:underline"
            >
              Alves Dev
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/lucasalvesz/"
              className="text-body hover:text-heading ms-5"
            >
              <i className="bi bi-linkedin text-xl hover:text-blue-500 transition ease-in"></i>
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a
              href="https://github.com/tluccas"
              className="text-body hover:text-heading ms-5"
            >
              <i className="bi bi-github text-xl hover:text-gray-800 transition ease-in"></i>
              <span className="sr-only">GitHub account</span>
            </a>

            <a
              href="mailto:lucas1901alves@gmail.com"
              className="text-body hover:text-heading ms-5"
            >
              <i className="bi bi-envelope-fill text-xl hover:text-gray-800 transition ease-in"></i>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
