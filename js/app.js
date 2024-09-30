const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const allpost = data.posts;
  displayAllpost(allpost);
};

const displayAllpost = (posts) => {
  //   console.log(allpost);
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    // console.log(post);
    const card = document.createElement("div");
    card.classList = `card flex  flex-row  p-10 mb-5 bg-[#797dfc2f]
    `;
    card.innerHTML = `
     <div class="w-20 me-14">
                <img class="rounded w-16" src="${post.image}" alt="" />
                <img
                  class="relative bottom-14 left-8 lg:bottom-20 lg:left-14 hidden"
                  src="images/online.png"
                  alt=""
                />
                <img
                  class="relative bottom-14 left-8 lg:bottom-20 lg:left-16"
                  src="images/offline.png"
                  alt=""
                />
         </div>
              <div>
                <div class="flex justify-start font-bold text-sm mb-3">
                  <p class="me-7"># ${post.category}</p>
                  <p>Author: <span>${post.author.name}</span></p>
                </div>
                <div>
                  <h4 class="font-bold text- mb-4">
                    ${post.title}
                  </h4>
                  <p class="text-base text-[#12132d8a] mb-5">
                     ${post.description} is simply dummy text of the printing and typesetting industry. Lorem 
                  </p>
                  <hr class="border border-dashed"	 />

                  <div class="flex justify-between mt-6">
                    <div class="flex text-[#12132d79]">
                      <p>
                        <i class="fa-regular fa-message"></i>
                        <span class="ps-3 pe-6">${post.comment_count} </span>
                      </p>
                      <p>
                        <i class="fa-regular fa-eye"></i
                        ><span class="ps-3 pe-6">${post.view_count}</span>
                      </p>
                      <p>
                        <i class="fa-regular fa-clock"></i
                        ><span class="ps-3 pe-6">${post.posted_time}  min</span>
                      </p>
                    </div>

                    <button onclick="readHandler('${post.title}', '${post.view_count}')" class=" w-8 h-8 ">
                      <i
                     
                        class="fa-solid 
                       
                        fa-envelope-open"
                        style="color: #272af5"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
    `;
    postContainer.appendChild(card);
  });
};

// read article hndler
const readHandler = (title, view_count) => {
  const markRead = document.getElementById("mark-number");
  const markReadValue = parseFloat(markRead.innerText);

  markRead.innerText = markReadValue + 1;
  const postContainer = document.getElementById("read-container");
  const div = document.createElement("div");
  div.classList = `flex justify-around mx-11 my-4 p-3 rounded-2xl bg-[#12132d15]`;
  div.innerHTML = `
    <div>
          <p class="text-base font-semibold me-4">
                    ${title}
                  </p>
      </div>
      <div class="flex items-center text-[#12132d94]">
                  <i class="fa-regular fa-eye me-1"></i>
                  <p>${view_count}</p>
       </div>
  `;
  postContainer.appendChild(div);
};

//handel search

const handleSearch = () => {
  toggleSpinner(true);
  const searchInput = document.getElementById("search-input");
  const inputText = searchInput.value;
  searchInput.value = "";
  loadSearchData(inputText);
};

const loadSearchData = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
  );
  const data = await res.json();
  const searchItem = data.posts;
  displaySreachResult(searchItem);
};

//display search result
const displaySreachResult = (searchItems) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerText = "";
  searchItems.forEach((item) => {
    // console.log(item);
    const card = document.createElement("div");
    card.classList = `card flex  flex-row  p-10 mb-5 bg-[#797dfc2f]
    `;
    card.innerHTML = `
    <div class="w-20 me-14">
               <img class="rounded w-16" src="${item.image}" alt="" />
               <img
                 class="relative bottom-14 left-8 lg:bottom-20 lg:left-14 hidden"
                 src="images/online.png"
                 alt=""
               />
               <img
                 class="relative bottom-14 left-8 lg:bottom-20 lg:left-16"
                 src="images/offline.png"
                 alt=""
               />
        </div>
             <div>
               <div class="flex justify-start font-bold text-sm mb-3">
                 <p class="me-7"># ${item.category}</p>
                 <p>Author: <span>${item.author.name}</span></p>
               </div>
               <div>
                 <h4 class="font-bold text- mb-4">
                   ${item.title}
                 </h4>
                 <p class="text-base text-[#12132d8a] mb-5">
                    ${item.description} is simply dummy text of the printing and typesetting industry. Lorem 
                 </p>
                 <hr" />

                 <div class="flex justify-between mt-6">
                   <div class="flex text-[#12132d79]">
                     <p>
                       <i class="fa-regular fa-message"></i>
                       <span class="ps-3 pe-6">${item.comment_count} </span>
                     </p>
                     <p>
                       <i class="fa-regular fa-eye"></i
                       ><span class="ps-3 pe-6">${item.view_count}</span>
                     </p>
                     <p>
                       <i class="fa-regular fa-clock"></i
                       ><span class="ps-3 pe-6">${item.posted_time}  min</span>
                     </p>
                   </div>

                   <button onclick="readHandler('${item.title}', '${item.view_count}')" class=" w-8 h-8 ">
                     <i
                    
                       class="fa-solid 
                      
                       fa-envelope-open"
                       style="color: #272af5"
                     ></i>
                   </button>
                 </div>
               </div>
             </div>
   `;
    postContainer.appendChild(card);
  });
  toggleSpinner(false);
};

// spinner
const toggleSpinner = (isLoading) => {
  const spinnerContainer = document.getElementById("spinner");
  if (isLoading) {
    spinnerContainer.classList.remove("hidden");
  } else {
    spinnerContainer.classList.add("hidden");
  }
};

//letest post
const loadLetestPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  displayLetestPosts(data);
};

const displayLetestPosts = (posts) => {
  const postContainer = document.getElementById("letest-posts");
  posts.forEach((post) => {
    console.log(post);
    const div = document.createElement("div");
    div.classList = `card bg-base-100 w-96 shadow-xl`;
    div.innerHTML = `
    <figure>
              <img
                src="${post.cover_image}"
              />
            </figure>
            <div class="card-body">
              <p>
                <i class="fa-regular fa-calendar"></i>
                <span>${post.author?.posted_date || "No publish date"}</span>
              </p>
              <h2 class="card-title">${post.title}</h2>
              <p>${post.description}</p>
              <div class="flex">
                <div class="me-3">
                  <img class="max-w-11 rounded-full" src="${
                    post.profile_image
                  }" alt="" />
                </div>
                <div>
                  <h1 class="font-bold">${post.author.name}</h1>
                  <p class="text-sm">${
                    post?.author?.designation || "Unknown"
                  }</p>
                </div>
              </div>
            </div>
    `;
    postContainer.appendChild(div);
  });
};

loadData();
loadLetestPosts();
