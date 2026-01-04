import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';


const FeedPage = () => {
  // Placeholder posts
  const posts = [
    {
      id: 1,
      user: 'Alex Runner',
      handle: '@alexruns',
      time: '2h ago',
      content: 'Just finished a 10k morning run! Feeling amazing 🏃‍♂️',
      stats: { distance: '10.2 km', pace: '5:23/km', time: '54:52' },
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      user: 'Sarah Lifts',
      handle: '@sarahlifts',
      time: '4h ago',
      content: 'New PR on deadlifts today! 💪 Finally hit that goal I\'ve been working towards for months.',
      stats: { exercise: 'Deadlift', weight: '140 kg', reps: '3' },
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      user: 'Mike Cycles',
      handle: '@mikeonwheels',
      time: '6h ago',
      content: 'Beautiful sunrise ride through the mountains this morning. Nothing beats starting the day like this! 🚴‍♂️',
      stats: { distance: '45 km', elevation: '820m', time: '1:45:30' },
      likes: 124,
      comments: 23,
    },
  ];

  return (
    <div className="min-h-screen">

      <div className="p-4 space-y-4">

        <Card className="bg-card border-border">
          <CardContent className="pt-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary shrink-0" />
              <div className="flex-1">
                <div className="bg-secondary rounded-lg px-4 py-3 text-muted-foreground text-sm cursor-pointer hover:bg-secondary/80 transition-colors">
                  Share your workout...
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

  
        {posts.map((post) => (
          <Card key={post.id} className="bg-card border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{post.user}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.handle} · {post.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="pb-3">
              <p className="text-sm mb-3">{post.content}</p>
              
              {/* Stats Card */}
              <div className="bg-secondary/50 rounded-lg p-3 border border-border">
                <div className="flex justify-around text-center">
                  {Object.entries(post.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-primary font-bold">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0 border-t border-border">
              <div className="flex justify-around w-full pt-3">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
