
<template>
  <div class="p-4 space-y-6">
    <h2 class="text-2xl font-bold">Vue Usage Example</h2>
    
    <!-- Using button components -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">Buttons</h3>
      <div class="flex flex-wrap gap-2">
        <button :class="$nComponents.buttonPrimary">Primary Button</button>
        <button :class="$nComponents.buttonSecondary">Secondary Button</button>
        <button :class="$nComponents.buttonOutline">Outline Button</button>
        <button :class="$nComponents.buttonGhost">Ghost Button</button>
        <button :class="$nComponents.buttonDestructive">Destructive Button</button>
      </div>
    </div>
    
    <!-- Using badge components -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">Badges</h3>
      <div class="flex flex-wrap gap-2">
        <span :class="$nComponents.badgePrimary">Primary Badge</span>
        <span :class="$nComponents.badgeSecondary">Secondary Badge</span>
        <span :class="$nComponents.badgeOutline">Outline Badge</span>
        <span :class="$nComponents.badgeDestructive">Destructive Badge</span>
      </div>
    </div>
    
    <!-- Using card component -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">Card</h3>
      <div :class="$nComponents.card">
        <div :class="$nComponents.cardHeader">
          <h4 class="text-lg font-semibold">Card Title</h4>
        </div>
        <div :class="$nComponents.cardContent">
          <p>This is a card component from our N-Components library.</p>
        </div>
        <div :class="$nComponents.cardFooter">
          <button :class="$nComponents.buttonPrimary">Action</button>
        </div>
      </div>
    </div>
    
    <!-- Using input components -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">Inputs</h3>
      <div class="space-y-2 max-w-md">
        <input :class="$nComponents.input" placeholder="Default input" />
        <input :class="$nComponents.inputError" placeholder="Error input" />
        <input :class="$nComponents.inputSuccess" placeholder="Success input" />
      </div>
    </div>
    
    <!-- Using tabs components -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">Tabs</h3>
      <div :class="$nComponents.tabsList">
        <button :class="[$nComponents.tab, $nComponents.tabActive]" data-state="active">Tab 1</button>
        <button :class="$nComponents.tab">Tab 2</button>
        <button :class="$nComponents.tab">Tab 3</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueUsageExample',
  created() {
    // The nComponents are available as $nComponents through the Vue plugin
    console.log('N-Components available in Vue:', this.$nComponents);
  }
}
</script>
