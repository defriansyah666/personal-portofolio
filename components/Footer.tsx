export default function Footer() {
    return (
      <footer className="py-12 bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium">
                &copy; {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Defriansyah</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mt-1">
                All rights reserved. Crafted with passion.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {/* Social icons - using the same icons from Hero section */}
              <a href="https://github.com/defriansyah666" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.481 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/deff.syah_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                 >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.978.242 2.437.412a4.92 4.92 0 011.75 1.086 4.922 4.922 0 011.086 1.75c.17.46.357 1.267.412 2.437.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.242 1.978-.412 2.437a4.902 4.902 0 01-1.086 1.75 4.91 4.91 0 01-1.75 1.086c-.46.17-1.267.357-2.437.412-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.978-.242-2.437-.412a4.91 4.91 0 01-1.75-1.086 4.91 4.91 0 01-1.086-1.75c-.17-.46-.357-1.267-.412-2.437C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.055-1.17.242-1.978.412-2.437a4.922 4.922 0 011.086-1.75 4.922 4.922 0 011.75-1.086c.46-.17 1.267-.357 2.437-.412C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.013 7.053.072 5.775.13 4.633.345 3.733.688 2.797 1.045 2.045 1.797.688 2.733.345 3.633.13 4.775.072 6.053.013 7.332 0 7.735 0 12s.013 4.668.072 5.947c.058 1.278.273 2.42.616 3.32.357.936 1.109 1.688 2.045 2.045.9.343 2.042.558 3.32.616C7.332 23.987 7.735 24 12 24s4.668-.013 5.947-.072c1.278-.058 2.42-.273 3.32-.616.936-.357 1.688-1.109 2.045-2.045.343-.9.558-2.042.616-3.32.059-1.279.072-1.682.072-5.947s-.013-4.668-.072-5.947c-.058-1.278-.273-2.42-.616-3.32a5.94 5.94 0 00-2.045-2.045c-.9-.343-2.042-.558-3.32-.616C16.668.013 16.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
            </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }