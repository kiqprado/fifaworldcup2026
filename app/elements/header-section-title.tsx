import { tv, VariantProps } from 'tailwind-variants'

const headerVariants = tv({
  slots: {
    container: 'flex flex-col gap-4',
    prefix: [
      'text-xs tracking-[0.3em] uppercase',
      'text-amber-400/80',
      'font-medium'
    ],
    title: [
      'text-4xl md:text-5xl',
      'uppercase leading-tight',
      'text-amber-300',
    ],
    highlight: [
      'text-zinc-100 font-bold',
      'block'
    ],
    description: [
      'text-zinc-400 text-justify',
      'max-w-[33%]'
    ]
  },
  variants: {
    align: {
      left: {
        container: 'items-start text-left'
      },
      center: {
        container: 'items-center text-center',
        description: 'max-w-[786px]'
      }
    }
  },
  defaultVariants: {
    align: 'left'
  }
})

interface IHeaderSectionTitle extends VariantProps<typeof headerVariants> {
  title: string
  highlight?: string
  description: string
  prefix?: string
}

export function HeaderSectionTitle({
  title,
  highlight,
  description,
  prefix,
  align
}: IHeaderSectionTitle) {
  const styles = headerVariants({ align })

  return (
    <div className={styles.container()}>
      {prefix && (
        <span className={styles.prefix()}>
          {prefix}
        </span>
      )}

      <h2 className={styles.title()}>
        {title}
        {highlight && (
          <span className={styles.highlight()}>
            {highlight}
          </span>
        )}
      </h2>
      <p className={styles.description()}>
        {description}
      </p>
    </div>
  )
}