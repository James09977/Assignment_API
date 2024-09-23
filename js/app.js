const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const allpost = data.posts;
  displayAllpost(allpost);
  //   console.log(allpost);
};

const displayAllpost = (posts) => {
  //   console.log(allpost);
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    console.log(post);
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
                  <hr />

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

                    <button class=" w-8 h-8 ">
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

loadData();
