"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
export default function BlogsDetail() {
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
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchPost();
  }, [guid]);
  return (
    <>
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
          {/* <p>
            Join us at BB Caviar on a delightful journey through the captivating
            realm of caviar. In this blog, we'll explore the fascinating
            history, responsible and ethical sourcing practices, and the wide
            array of culinary uses of this esteemed delicacy. Ideal for both
            seasoned caviar lovers and newcomers to this luxurious world, our
            exploration will reveal the reasons behind caviar's enduring status
            as a pinnacle of culinary luxury and sophistication.
          </p> */}
          {/* <h4>The Storied Past of Caviar:</h4> */}
          {/* <p>
            Tracing back over thousands of years, caviar has long been a symbol
            of opulence and luxury in many cultures. Historically, it was so
            revered that by the 19th century, 95% of the world’s caviar came
            from the Caspian and Black Seas. As a favored delicacy of Tsarist
            Russia, it represented the pinnacle of aristocratic indulgence.
            Today, caviar maintains its esteemed status in the world of gourmet
            dining, having evolved into a symbol of culinary sophistication.
            With a 7% growth in the global caviar market projected by 2024,
            caviar's allure continues to captivate and enchant. Join us as we
            delve into the rich history of caviar and explore how it has become
            the ultimate emblem of gastronomic luxury.
          </p> */}
          {/* <h4>Sourcing Excellence at BB Caviar:</h4> */}
          {/* <p>
            Building on the rich legacy of caviar, at BB Caviar, our dedication
            extends beyond simply offering the finest caviar. We are deeply
            committed to responsible and sustainable sourcing practices. By
            collaborating with the top farms globally, we ensure our caviar is
            harvested under strict guidelines that protect the environment while
            guaranteeing the highest quality. Join us as we take you through the
            meticulous journey from sourcing to your table, a process that
            underscores our commitment to environmental stewardship and
            exceptional taste.
          </p> */}
          {/* <h4>Discovering Caviar Varieties:</h4> */}
          {/* <p>
            In line with our commitment to excellence and sustainability,
            exploring the diverse varieties of caviar becomes an essential part
            of the experience. At BB Caviar, we proudly showcase a range of
            caviar types, each offering a unique sensory journey. From the
            velvety, creamy notes of Beluga to the bold and robust flavors of
            Kaluga, and the delicate subtlety of Siberian caviar, our assortment
            caters to a variety of tastes. Our guide is designed to help caviar
            enthusiasts navigate through these different varieties,
            understanding their individual flavor profiles and textures. This
            exploration allows you to fully appreciate the diversity and
            richness of caviar:
          </p> */}
          {/* <p>
            * Beluga Caviar: Known for its large, silky pearls and creamy, rich
            flavor. <br /> * Siberian Caviar: Offers a more subtle and refined
            taste, with a smooth texture. <br /> * Kaluga Caviar: Renowned for
            its bold flavor and firm texture. <br /> * Other Varieties:
            Including a selection of rare and unique caviars from around the
            world. <br />
            Whether you are drawn to the classic luxury of Beluga or the
            distinctive taste of Kaluga, our guide will enhance your
            understanding and enjoyment of each caviar variety.
          </p> */}
          <div className={styles.caviarPhoto}>
            {post &&
            post.blog_attachments &&
            post.blog_attachments.length > 0 ? (
              <div className={styles.caviarPhoto}>
                <Image
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
          {/* <h4>Caviar in Culinary Arts:</h4> */}
          {/* <p>
            Following our exploration of caviar varieties, let's delve into how
            caviar plays a transformative role in the culinary arts. At BB
            Caviar, we celebrate the versatility of this exquisite ingredient.
            Our blog offers an array of creative recipes and innovative pairing
            ideas, demonstrating how caviar can elevate both traditional and
            modern culinary creations. We'll guide you through the art of
            integrating caviar into various dishes, from classic pairings that
            have stood the test of time to avant-garde recipes that redefine
            luxury dining. Discover with us how the simple addition of caviar
            can transform everyday meals into extraordinary gastronomic
            experiences.
          </p> */}
          {/* <h4>Caviar Etiquette and Preservation:</h4> */}
          {/* <p>
            As we venture from the culinary applications of caviar, it's
            important to consider the nuances of caviar etiquette and
            preservation to truly enhance your experience. At BB Caviar, we
            believe that the right knowledge and techniques are key to
            appreciating this delicacy to its fullest. Our expertise extends to
            providing you with detailed advice on how to serve caviar properly,
            including the ideal temperatures, the best accompaniments, and
            insights into the art of savoring caviar. Additionally, we emphasize
            the importance of effective storage methods, crucial for maintaining
            the exquisite flavor and quality of the caviar. Our guidance ensures
            that every aspect of your caviar experience, from presentation to
            consumption, is nothing short of perfection.
          </p> */}
          {/* <p>
            Wrapping up our foray into the world of caviar, it's clear that this
            delicacy represents more than just a taste sensation; it's a blend
            of rich tradition and luxury. At BB Caviar, our passion lies in
            bringing this journey to life for you. Through our shared insights,
            expert tips, and delectable recipes, we aim to celebrate the
            timeless elegance of caviar. We invite you to continue this
            exploration with us, as we delve deeper into the captivating world
            of caviar, ensuring that each tasting experience you have is
            memorable and unparalleled.
          </p> */}
        </div>
        <div className={styles.contentDown}>
          <div className={styles.down}>
            <div className={styles.h1Edit}>
              <h1>Recommended</h1>
            </div>
            <div className="container">
              <div className={`row ${styles.rowAll}`}>
                <div className="col-lg-6">
                  <div className={styles.box}>
                    <div className={styles.boxContent}>
                      <div className={styles.imgBox}>
                        <Image
                          width={450}
                          height={450}
                          src="/assets/image/blogspage1.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.Content}>
                        <h2>Blog Name</h2>
                        <div className={styles.pEdit2}>
                          <p>
                            Join us at BB Caviar on a delightful journey through
                            the captivating...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.box}>
                    <div className={styles.boxContent}>
                      <div className={styles.imgBox}>
                        <Image
                          width={450}
                          height={450}
                          src="/assets/image/blogspage2.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.Content}>
                        <h2>Blog Name</h2>
                        <div className={styles.pEdit2}>
                          <p>
                            Join us at BB Caviar on a delightful journey through
                            the captivating...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
