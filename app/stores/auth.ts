import { createAuthClient } from "better-auth/vue";
import { defineStore } from "pinia";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  };

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
  }

  return {
    loading,
    signIn,
    user,
    signOut,
    init,
  };
});
