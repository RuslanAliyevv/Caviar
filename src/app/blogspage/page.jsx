"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner/spinner";
import { useState, useEffect } from "react";
export default function BlogsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://bbcaviar.com/api/v1/blogs");
      const data = response.data;
      setBlogs(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.Blogs}>
        <h2 className="text-center">Blogs</h2>
        <div className={styles.backFone}></div>
        <div className="container">
          <div className={`row ${styles.rowAll}`}>
            {blogs.map((blog, index) => (
              <div key={index} className="col-lg-6">
                <div className={styles.box}>
                  <div className={styles.boxContent}>
                    <div className={styles.imgBox}>
                      {blog &&
                      blog.blog_attachments &&
                      blog.blog_attachments.length > 0 ? (
                        <div className={styles.caviarPhoto}>
                          <Image
                            loading="lazy"
                            width={450}
                            height={450}
                            src={blog.blog_attachments[0].filePath}
                            alt={blog.blog_attachments[0].altText}
                            onClick={() =>
                              router.push(`/blogsdetail/${blog.guid}`)
                            }
                          />
                        </div>
                      ) : (
                        <p></p>
                      )}
                    </div>
                    <div className={styles.Content}>
                      <h2>{blog.title}</h2>
                      <div className={styles.pEdit2}>
                        <p>{blog.content.split(".")[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              // <div className="col-lg-6">
              //   <div className={styles.box}>
              //     <div className={styles.boxContent}>
              //       <div className={styles.imgBox}>
              //         <Image
              //           width={450}
              //           height={450}
              //           src="/assets/image/blogspage2.png"
              //           alt=""
              //         />
              //       </div>
              //       <div className={styles.Content}>
              //         <h2>Blog Name</h2>
              //         <div className={styles.pEdit2}>
              //           <p>
              //             Join us at BB Caviar on a delightful journey through the
              //             captivating...
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              // <div className="col-lg-6">
              //   <div className={styles.box}>
              //     <div className={styles.boxContent}>
              //       <div className={styles.imgBox}>
              //         <Image
              //           width={450}
              //           height={450}
              //           src="/assets/image/blogspage3.png"
              //           alt=""
              //         />
              //       </div>
              //       <div className={styles.Content}>
              //         <h2>Blog Name</h2>
              //         <div className={styles.pEdit2}>
              //           <p>
              //             Join us at BB Caviar on a delightful journey through the
              //             captivating...
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              // <div className="col-lg-6">
              //   <div className={styles.box}>
              //     <div className={styles.boxContent}>
              //       <div className={styles.imgBox}>
              //         <Image
              //           width={450}
              //           height={450}
              //           src="/assets/image/blogspage1.png"
              //           alt=""
              //         />
              //       </div>
              //       <div className={styles.Content}>
              //         <h2>Blog Name</h2>
              //         <div className={styles.pEdit2}>
              //           <p>
              //             Join us at BB Caviar on a delightful journey through the
              //             captivating...
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              // <div className="col-lg-6">
              //   <div className={styles.box}>
              //     <div className={styles.boxContent}>
              //       <div className={styles.imgBox}>
              //         <Image
              //           width={450}
              //           height={450}
              //           src="/assets/image/blogspage2.png"
              //           alt=""
              //         />
              //       </div>
              //       <div className={styles.Content}>
              //         <h2>Blog Name</h2>
              //         <div className={styles.pEdit2}>
              //           <p>
              //             Join us at BB Caviar on a delightful journey through the
              //             captivating...
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              // <div className="col-lg-6">
              //   <div className={styles.box}>
              //     <div className={styles.boxContent}>
              //       <div className={styles.imgBox}>
              //         <Image
              //           width={450}
              //           height={450}
              //           src="/assets/image/blogspage3.png"
              //           alt=""
              //         />
              //       </div>
              //       <div className={styles.Content}>
              //         <h2>Blog Name</h2>
              //         <div className={styles.pEdit2}>
              //           <p>
              //             Join us at BB Caviar on a delightful journey through the
              //             captivating...
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
        <div className={styles.backFone2}></div>
      </div>
    </>
  );
}
