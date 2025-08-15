
export default function Header({children, dispatch, theme}) {
  return (
    <header>
      <div>
        {children}
      </div>
        <div className="theme-toggle">
            <img src={theme === "dark" ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"} alt="sun icon" />
            <label htmlFor="toggle" className="toggle">
                <input type="checkbox" id="toggle"
                onChange={(e)=> {
                  const isDark = e.target.checked;
                  dispatch({type: "themeToggle", payload: isDark? "dark" : "light"})}}/>
                <span className="slider"></span>
            </label>
            <img src={theme === "dark" ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"} alt="moon icon" />
        </div>
    </header>
  )
}
