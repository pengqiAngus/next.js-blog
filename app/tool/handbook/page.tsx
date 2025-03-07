"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FrontendInterviewHandbookPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="JavaScript Icon"
            width={120}
            height={120}
            className="animate-bounce"
          />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Front End Interview Handbook
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-justify">
          Front end interview preparation resources for busy engineers – quiz questions,
          JavaScript coding questions, algorithms questions, front end system design
          questions and more. Updated for 2025!
        </p>
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          asChild
        >
          <a href="#content">Start reading →</a>
        </Button>
        <p className="mt-4 text-gray-500 dark:text-gray-400">It's completely free to read!</p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <a
            href="https://github.com/yangshun/front-end-interview-handbook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Image
              src="/placeholder.svg"
              alt="GitHub Stars"
              width={100}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* Pink CTA Section */}
      <div className="bg-pink-500 text-white py-16 dark:bg-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Looking for front end interview practice?
          </h2>
          <p className="text-xl mb-8">
            GreatFrontEnd has 300+ practice questions and reference solutions from
            ex-interviewers at FAANG
          </p>
          <Button
            className="bg-white text-pink-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-medium"
            asChild
          >
            <a href="#practice">Get started →</a>
          </Button>
          <p className="mt-4 text-sm">Psst... I built this!</p>
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Solutions Icon"
                  width={48}
                  height={48}
                />
              </div>
              <p>Well-explained solutions</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Study Plans Icon"
                  width={48}
                  height={48}
                />
              </div>
              <p>Step-by-step study plans</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Process Icon"
                  width={48}
                  height={48}
                />
              </div>
              <p>Structured 4-stage process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Front End Interview Handbook?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="Search Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Front end interviews demystified</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Front end interview preparation resources are scarce but no fret, we tell
              you what to expect and everything else you need to know!
            </p>
            <a href="#learn-more" className="text-pink-500 hover:text-pink-600 mt-4 inline-block">
              Learn more
            </a>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="System Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">System design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              What even is Front end system design?! Learn more about them and how to ace
              these interviews.
            </p>
            <a href="#learn-more" className="text-pink-500 hover:text-pink-600 mt-4 inline-block">
              Learn more
            </a>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="Code Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Coding questions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Coding questions are an entirely different ball game for Front End
              interviews. We tell you how to prepare for them (hint: not just LeetCode).
            </p>
            <a href="#learn-more" className="text-pink-500 hover:text-pink-600 mt-4 inline-block">
              Learn more
            </a>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="Hero Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">From zero to hero</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Go from zero to front end interview hero with this handbook. No prior
              interview experience needed.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="Basics Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Back to basics</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Learn to walk before you learn to fly. While React, Vue and Angular are
              cool, make sure you also know your fundamentals.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg"
                alt="Community Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Community effort</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              The best thing about Open Source is that the community vets the contents,
              so you can be sure the answers here have been proofread by many.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Over 500,000 people have benefitted from this handbook
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Twitter testimonials would go here */}
          {/* For now using placeholder cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="CSS-Tricks Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">CSS-Tricks</h4>
                <p className="text-gray-500 dark:text-gray-400">@css · Feb 14, 2018</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Front End Interview [Question] Handbook
              <br />
              A good amount of HTML, CSS, and JavaScript questions (and answers).
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Frontend Daily Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Frontend Daily</h4>
                <p className="text-gray-500 dark:text-gray-400">@FrontendDaily · Apr 10, 2018</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              A Front End Interview Handbook (Headed to a job interview any time soon? Here are some questions and answers worth being prepared for.)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Code with Kenny Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Code with Kenny</h4>
                <p className="text-gray-500 dark:text-gray-400">@CodeWithKenny · Nov 11, 2020</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              This has been a great refresher resource and in an easy to read format. Enjoy!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="DeeDee Walsh Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">DeeDee Walsh</h4>
                <p className="text-gray-500 dark:text-gray-400">@ddskier · Jul 26, 2020</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              This is useful! Front End Interview Handbook by @yangshunz #interviews #interviewing #career
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Jacob Jed Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Jacob Jed</h4>
                <p className="text-gray-500 dark:text-gray-400">@realJacobJed · Mar 3, 2018</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Awesome Front End Interview Handbook. I learned a lot from this. Test yourself! I wouldn't pass this interview before reading the answers for the first time. Would you?
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Matija Marohnić Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Matija Marohnić</h4>
                <p className="text-gray-500 dark:text-gray-400">@silvenon · Jul 20, 2020</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Front End Interview Handbook is AMAZING, huge props to @yangshunz and all the contributors. ⭐
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Success stories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "Preparing for my first rounds of tech interviews was really daunting - I wasn't sure what to expect and where to start. This handbook together with the Tech Interview Handbook was a great starting point for me. It clearly describes each part of the process and has tons of awesome tips and resources. With this handbook and lots of practice, I managed to get offers from Facebook, Dropbox and Amazon!"
            </p>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="Erin Teo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Erin Teo</h4>
                <p className="text-gray-500 dark:text-gray-400">Senior Front End Engineer, Facebook</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "There aren't a lot of high quality front end interview prep materials online. That's why the Front End Interview Handbook is my go-to prep resource. With the help of the interview handbook, I was able to easily identify my weak points and work on them. As a result, I managed to get offers from Meta, Amazon, Twitch, Microsoft, Coinbase, etc.
              <br /><br />
              I've learnt a few things and blogged about them on https://zhenghao.io, check them out if you're interested!"
            </p>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="Zhenghao He"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Zhenghao He</h4>
                <p className="text-gray-500 dark:text-gray-400">Engineering Manager at Robinhood, ex-Amazon</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "Before discovering the handbook, I didn't know what to expect for my front end interviews. Thanks to it, I had a better understanding and even learned new things about frontend development. The handbook is an immense resource, one that I still use to refresh and reinforce my knowledge to tackle interviews confidently!"
            </p>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="Kai Li"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold dark:text-white">Kai Li</h4>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer, Stripe, ex-Quora, ex-Zendesk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">Would you like to contribute a success story?</p>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-600 font-medium"
          >
            Open a Pull Request here!
          </a>
        </div>
      </div>

      {/* Sponsorship Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Enjoying Front End Interview Handbook so far?</h2>
        <p className="text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-justify">
          Support this project by becoming a sponsor! Your logo/profile picture will show up here with a link to your website.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <Image
            src="/placeholder.svg"
            alt="Sponsor Logo"
            width={120}
            height={120}
            className="rounded-lg"
          />
          <Image
            src="/placeholder.svg"
            alt="Sponsor Logo"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          asChild
        >
          <a href="#sponsor">Become a sponsor!</a>
        </Button>
      </div>

      {/* Resume CTA Section */}
      <div className="bg-pink-500 text-white py-16 dark:bg-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Craft the perfect resume for FAANG with FAANG Tech Leads' high quality
            Software Engineer resume templates and samples.
          </h2>
          <Button
            className="bg-white text-pink-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-medium"
            asChild
          >
            <a href="#improve-resume">Improve your resume now →</a>
          </Button>
        </div>
      </div>
    </div>
  );
}