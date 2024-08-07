import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Bookmark } from 'lucide-react';
import { Button } from '../ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { calculatorTime } from '@/utils/calculator.time';
import PostBookmark from '../post/post.bookmark';
import { BookmarkPost } from '@/types/type';

const CardPost = ({authorName, time, title, tags, authorId, postId, countComments, countVote, bookmarks} : {
    authorName: string,
    time: string,
    title: string,
    tags: string[],
    authorId: string,
    postId: string,
    countComments: number
    countVote: number
    bookmarks: BookmarkPost[]
}) => {
  return (
    <Card className='relative w-full border-2 border-gray-500 shadow-md'>
      <CardHeader className='flex flex-row gap-x-2'>
          <div className='mt-[14px]'>
            <Link href={`/u/${authorId}`}>
              <Avatar className='h-10 w-10 rounded-full'>
                <AvatarImage src={'https://github.com/shadcn.png'} alt="" />
                <AvatarFallback>
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className='flex flex-col flex-grow gap-y-2'>
              <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                        <span className='text-lg'>{authorName || 'NA'}</span>
                        <span className='text-xs text-gray-500'>{calculatorTime(time) || 'NA'}</span>
                  </div>
                  <div className="text-lg font-medium">Votes: {countVote}</div>
              </div>
              <div className='gap-y-2 flex flex-col'>
                <Link href={`/p/${postId}`}>
                  <CardTitle className=' cursor-pointer hover:text-blue-500'>{title}</CardTitle>
                </Link>
                <CardDescription className='text-xs'>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((category: any, index: any) => (
                            <span key={index + 1} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
                                {category}
                            </span>
                        ))}
                    </div>
                </CardDescription>
              </div>
          </div>
      </CardHeader>
      <CardFooter className='flex justify-between items-center'>
          <Button variant="outline" className='border-none bg-card hover:bg-gray-100 gap-x-4 flex'><MessageCircle className='h-4 w-4' /> {countComments} Comments</Button>
          <PostBookmark postId={postId} bookmarks={bookmarks}/>
      </CardFooter>
    </Card>
  )
}

export default CardPost
