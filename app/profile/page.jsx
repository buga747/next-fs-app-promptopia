"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
