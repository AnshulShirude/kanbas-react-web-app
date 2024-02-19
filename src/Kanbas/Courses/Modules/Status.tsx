function Status() {
    return (
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
        <h3>Course Status</h3>
  
        <button type="button">Import Existing Content</button>
        <button type="button">Import From Commons</button>
        <button type="button">Choose Home Page</button>
        <button type="button">View Course Stream</button>
        <button type="button">New Announcement</button>
        <button type="button">New Analytics</button>
        <button type="button">View Course Notifications</button>

        <h2>Coming Up</h2>
  
        <a href="/Kanbas/Courses/Calendar/screen.html">View Calendar</a>
        <ul>
          <li>
            <a href="/Kanbas/Courses/Lectures/screen.html">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Lectures/screen.html">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Lectures/screen.html">CS 5610 06 SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Status;
  