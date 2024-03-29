function showPositions1() {
  const REQUEST_URL =
    "https://boards-api.greenhouse.io/v1/boards/asg/departments/"
  let request = new XMLHttpRequest()
  request.open("GET", REQUEST_URL)
  request.responseType = "json"
  request.send()
  request.onload = function () {
    const data = request.response
    const departments = data.departments
    let allPositions = ""
    const allPositionsWrapper = document.querySelector(".asg-careers")
    const jobsArr = departments.filter((department) => department.jobs.length)
    let jobsAll = []

    for (const department of jobsArr) {
      for (let i = 0; i < department.jobs.length; i++) {
        allPositions += `
            <a class="asg-careers__item" href="${department.jobs[i].absolute_url}" rel="noopener noreferrer" target="_blank">
                <span class="asg-careers__item-position">
                    <span class="asg-careers__item-heading">${department.jobs[i].title}</span>
                    <span class="asg-careers__item-text">${department.name}&nbsp;&nbsp;|&nbsp;&nbsp;${department.jobs[i].location.name}</span>
                </span>
                <span class="asg-careers__item-btn-wrap">
                     <span class="asg-careers__item-btn">
                     Learn more<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9364 1.61441L14.9363 1.61429L14.9272 1.62336C14.5488 2.00201 14.4814 2.68147 14.9435 3.07649L20.7266 8.86215H1.51503C0.911717 8.86215 0.5 9.37115 0.5 9.8774V11.0797C0.5 11.6562 0.938253 12.0949 1.51503 12.0949H20.7321L14.9428 17.9241C14.4815 18.3192 14.549 18.9982 14.9272 19.3766L14.9271 19.3768L14.9364 19.3856L15.7743 20.1819C16.17 20.638 16.8455 20.5696 17.2225 20.1925L26.1927 11.2184C26.3847 11.0264 26.5 10.7737 26.5 10.5C26.5 10.2263 26.3847 9.9736 26.1927 9.78155L17.2225 0.807539L16.8689 1.16102L17.2225 0.807539C16.8455 0.430348 16.17 0.361984 15.7743 0.818061L14.9364 1.61441Z" fill="#1C872B" stroke="#1C872B"/>
</svg>
</span>
                </span>
            </a>
        `
      }
    }

    allPositionsWrapper.insertAdjacentHTML("beforeend", allPositions)
  }
}

function showPositions2() {
  const REQUEST_URL =
    "https://boards-api.greenhouse.io/v1/boards/asgjobs/departments/"
  let request = new XMLHttpRequest()
  request.open("GET", REQUEST_URL)
  request.responseType = "json"
  request.send()
  request.onload = function () {
    const data = request.response
    const departments = data.departments
    let allPositions = ""
    const allPositionsWrapper = document.querySelector(".asg-careers")
    const jobsArr = departments.filter((department) => department.jobs.length)
    let jobsAll = []

    for (const department of jobsArr) {
      for (let i = 0; i < department.jobs.length; i++) {
        allPositions += `
            <a class="asg-careers__item" href="${department.jobs[i].absolute_url}" rel="noopener noreferrer" target="_blank">
                <span class="asg-careers__item-position">
                    <span class="asg-careers__item-heading">${department.jobs[i].title}</span>
                    <span class="asg-careers__item-text">${department.name}&nbsp;&nbsp;|&nbsp;&nbsp;${department.jobs[i].location.name}</span>
                </span>
                <span class="asg-careers__item-btn-wrap">
                     <span class="asg-careers__item-btn">
                     Learn more<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9364 1.61441L14.9363 1.61429L14.9272 1.62336C14.5488 2.00201 14.4814 2.68147 14.9435 3.07649L20.7266 8.86215H1.51503C0.911717 8.86215 0.5 9.37115 0.5 9.8774V11.0797C0.5 11.6562 0.938253 12.0949 1.51503 12.0949H20.7321L14.9428 17.9241C14.4815 18.3192 14.549 18.9982 14.9272 19.3766L14.9271 19.3768L14.9364 19.3856L15.7743 20.1819C16.17 20.638 16.8455 20.5696 17.2225 20.1925L26.1927 11.2184C26.3847 11.0264 26.5 10.7737 26.5 10.5C26.5 10.2263 26.3847 9.9736 26.1927 9.78155L17.2225 0.807539L16.8689 1.16102L17.2225 0.807539C16.8455 0.430348 16.17 0.361984 15.7743 0.818061L14.9364 1.61441Z" fill="#1C872B" stroke="#1C872B"/>
</svg>
</span>
                </span>
            </a>
        `
      }
    }

    allPositionsWrapper.insertAdjacentHTML("beforeend", allPositions)
  }
}

showPositions1()
showPositions2()
