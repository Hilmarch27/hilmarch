import { Button } from '@/components/retroui/Button';
import {
  DATA_PROFILE,
  DATA_SOCIAL_MEDIA,
} from '@/routes/_app/-components/data';
import { ExternalLink } from 'lucide-react';

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center space-x-1.5">
      {DATA_SOCIAL_MEDIA.map((social) => (
        <a
          key={social.title}
          href={social.link}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant={'secondary'}
            title={social.description}
            size="icon"
            className="rounded-lg"
          >
            <social.icon className="w-4 h-4" />
          </Button>
        </a>
      ))}
    </div>
  );
}

export function Profile() {
  return (
    <div className="space-y-2 text-sm">
      {DATA_PROFILE.map((profile) => (
        <a
          key={profile.title}
          href={profile.link}
          target="_blank"
          rel="noreferrer"
          className="grid gap-1.5"
        >
          <Button
            className="w-full flex items-center justify-between rounded-lg"
            title={profile.description}
          >
            <div className="flex items-center">
              <profile.icon className="size-4 mr-2" />
              <span className="truncate">{profile.title}</span>
            </div>
            {profile.link && <ExternalLink className="w-4 h-4" />}
          </Button>
        </a>
      ))}
    </div>
  );
}
