import React from "react";
import "./GroupPost.css";

// function GroupPost() {
//     return (
//         <div className="main">
//             <div className="post">
//                 <div className="title">제목을 받아서 넣을거야</div>

//                 <div className="content">
//                     일지 내용을 받아서 넣을거야일지 내용을 받아서 넣을거야일지
//                     내용을 받아서 넣을거야일지 내용을 받아서 넣을거야일지 내용을
//                     받아서 넣을거야일지 내용을 받아서 넣을거야일지 내용을 받아서
//                     넣을거야일지 내용을 받아서 넣을거야일지 내용을 받아서
//                     넣을거야일지 내용을 받아서 넣을거야일지 내용을 받아서
//                     넣을거야
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GroupPost;

function GroupPost({ post }) {
    const { title, description, userId, publishedAt } = post.snippet;
    return (
        <div className="main">
            <div className="space">
                <div className="post">
                    <div className="userId">{userId}</div>
                    <div className="publishedAt">{publishedAt}</div>
                    <div className="title">{title}</div>
                    <div className="content">{description}</div>
                </div>
            </div>
        </div>
    );
}

export default GroupPost;

// export default function GroupPost({ post }) {
//     return (
//         <div className="post-body">
//             <div className="post-info">
//                 <div className="post-title">{post.title}제목을</div>
//                 <div className="post-content">{post.content}내용을</div>
//             </div>
//             <button className="like">like</button>
//         </div>
//     );
// }