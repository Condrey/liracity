'use client'

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query"
import { upsertAbout } from "./action"
import { toast } from "sonner"

const queryKey:QueryKey = ['entity']
export function useUpsertAboutMutation(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: upsertAbout,
        async onSuccess(data, variables, context) {
            toast.success('Successfully updated about information.')
           await  queryClient.cancelQueries({queryKey})
           queryClient.invalidateQueries({queryKey})
        },
        onError(error, variables, context) {
            console.error(error)
            toast.error('Failed to update about information')
        },
    })
}