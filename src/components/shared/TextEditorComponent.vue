<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
@import '@/assets/theme/color_palette.css';

textarea {
    width: 100%;
    background-color:  hsla(0, 0%, 0%, 0);
    color: var(--text-primary);
    padding: 1rem;
}

textarea:focus {
    outline: none !important;
}

button {
    background-color:  hsla(0, 0%, 0%, 0);
    color: var(--text-primary);
    float: right;
    border-radius: 0px;
}

.btn-secondary {
    background-color: rgba(84,91,98,.2);
    border-color: transparent;
}

.btn-secondary.active {
    background-color: rgba(84,91,98,.6) !important;
    border-color: transparent !important;
}

</style>

<template>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" checked>Aa
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2">&lt; &gt;
        </label>
    </div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button type="button" class="btn btn-dark">Save</button>
</template>
