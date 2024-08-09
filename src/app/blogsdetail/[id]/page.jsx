"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/spinner";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
// import Link from "next/link";

export default function BlogsDetail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const guid = id;

  const [post, setPost] = useState({
    title: "",
    blog_attachments: [],
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("https://bbcaviar.com/api/v1/blogs");
        const data = response.data;
        setPost(data && data.find((u) => u.guid === guid));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchPost();
  }, [guid]);

  const [recommendedBlogs, setRecommendedBlogs] = useState([]);

  useEffect(() => {
    const fetchRecommendedBlogs = async () => {
      try {
        const response = await axios.get("https://bbcaviar.com/api/v1/blogs");
        const data = response.data;
        const currentIndex = data.findIndex((u) => u.guid === guid);
        const filteredBlogs = data.filter((_, index) => index !== currentIndex);
        const recommendedBlogs = filteredBlogs.slice(0, 2);
        setRecommendedBlogs(recommendedBlogs);
      } catch (error) {
        console.error("Error fetching recommended blogs:", error);
      }
    };
    fetchRecommendedBlogs();
  }, [guid]);
  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.BlDetail}>
        <div className={styles.h2Edit}>
          <h2 className="text-center">{post && post.title}</h2>
        </div>
        <div className={styles.pEdit}>
          {post &&
            post.blogInfo &&
            post.blogInfo.slice(0, 3).map((info) => (
              <div key={info.guid}>
                <h4>{info.title}</h4>
                <p>{info.content}</p>
              </div>
            ))}

          <div className={styles.caviarPhoto}>
            {post &&
            post.blog_attachments &&
            post.blog_attachments.length > 0 ? (
              <div className={styles.caviarPhoto}>
                <Image
                  loading="lazy"
                  width={1060}
                  height={707}
                  src={post.blog_attachments[0].filePath}
                  alt={post.blog_attachments[0].altText}
                />
              </div>
            ) : (
              <p></p>
            )}
          </div>

          {post &&
            post.blogInfo &&
            post.blogInfo.slice(3).map((info) => (
              <div key={info.guid}>
                <h4>{info.title}</h4>
                <p>{info.content}</p>
              </div>
            ))}
        </div>
        <div className={styles.contentDown}>
          <div className={styles.down}>
            <div className={styles.h1Edit}>
              <h1>Recommended</h1>
            </div>
            <div className="container">
              <div className={`row ${styles.rowAll}`}>
                {recommendedBlogs.map((blog) => (
                  <div key={blog.guid} className="col-lg-6">
                    <div className={styles.box}>
                      <div className={styles.boxContent}>
                        <div className={styles.imgBox}>
                          <Image
                            width={450}
                            height={450}
                            src={blog.blog_attachments[0].filePath}
                            alt={blog.title}
                            onClick={() =>
                              router.push(`/blogsdetail/${blog.guid}`)
                            }
                          />
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
