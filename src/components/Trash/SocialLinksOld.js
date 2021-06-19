import React from 'react';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';

export const MoonSocialLinkStyle = React.memo(

  function MoonSocialLink() {
    return (
      <>
        <SocialProvider useStyles={useRoundSocialLinkStyles}>
          <SocialLink brand={'LinkedIn'} href={'https://www.linkedin.com/in/kushkul97'} />
          <SocialLink brand={'GithubCircle'} href={'https://github.com/Kushalkulkarni'} />
          <SocialLink brand={'Instagram'} href={'https://www.instagram.com/kush_kul7/'} />
          <SocialLink brand={'Twitter'} href={'https://twitter.com/siriwatknp'} />
        </SocialProvider>
      </>
    );
  }
);