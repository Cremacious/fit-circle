import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users } from 'lucide-react';

const RightSidebar = () => {
  return (
    <aside className="hidden xl:flex flex-col h-screen w-full bg-sidebar border-l border-border p-4 gap-4">
      {/* Trending Section */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['#MorningRun', '#LegDay', '#PRAlert', '#FitFam'].map((tag) => (
            <div
              key={tag}
              className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              {tag}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Friends */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Suggested Friends
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary" />
                <div>
                  <p className="text-sm font-medium">User {i}</p>
                  <p className="text-xs text-muted-foreground">@user{i}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-7">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default RightSidebar;
