export default function Sidebar() {
  return (
    <div className='drawer-side'>
      <label
        htmlFor='my-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
        <li>
          <details open>
            <summary>Projects</summary>
            <ul>
              <li>
                <a>Project 1</a>
              </li>
              <li>
                <a>Project 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  )
}
