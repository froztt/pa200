<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Post } from "@prisma/client";

  interface Props {
    post: Post & {
    author?: {
      name: string;
    } | null;
  };
  }

  let { post }: Props = $props();
</script>

<div class="post" onclick={() => goto(`/p/${post.id}`)}>
  <h2>{post.title}</h2>
  <small
    >{post.author?.name ? `By ${post.author.name}` : "Unknown author"}</small
  >
  <p>{@html post.content}</p>
</div>

<style>
  div {
    color: inherit;
    padding: 2rem;
  }
  .post {
    background: white;
    transition: box-shadow 0.1s ease-in;
  }

  .post:hover {
    box-shadow: 1px 1px 3px #aaa;
    cursor: pointer;
  }

  .post,
  .post {
    margin-top: 2rem;
  }
</style>
