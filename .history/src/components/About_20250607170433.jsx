<motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EB5939',
        }}
        animate={{
          WebkitMaskPosition: `${maskPosition.x}px ${maskPosition.y}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        {hoverContent}
      </motion.div>