import express from "express";
import Post from "../model/Post.js";

export const GetPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    console.log({ message: error });
  }
};

export const CreatePost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    console.log({ message: err });
  }
};

export const GetOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log({ message: error });
  }
};

export const Delete = async (req, res) => {
  try {
    const post = await Post.remove({ _id: req.params.id });
    res.json(post);
  } catch (error) {
    console.log({ message: error });
  }
};

export const Update = async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(post);
  } catch (error) {
    console.log({ message: error });
  }
};
