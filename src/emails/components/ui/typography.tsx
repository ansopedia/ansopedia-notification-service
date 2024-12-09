import * as React from 'react';
import { Text, Heading } from '@react-email/components';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/emails/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight',
      h2: 'border-b pb-2 text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      ul: 'ml-6 list-disc [&>li]:mt-2',
      inlineCode: 'rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      largeText: 'text-lg font-semibold',
      smallText: 'text-sm font-medium leading-none',
      mutedText: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {}

const Typography = ({ className, variant, children, ...props }: TypographyProps) => {
  // Use Heading component for h1-h6 variants
  if (typeof variant === 'string' && variant.startsWith('h')) {
    const level = parseInt(variant.charAt(1)) as 1 | 2 | 3 | 4 | 5 | 6;
    return (
      <Heading as={`h${level}`} className={cn(typographyVariants({ variant, className }))} {...props}>
        {children}
      </Heading>
    );
  }

  // Use Text component for all other variants
  return (
    <Text className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Text>
  );
};

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
