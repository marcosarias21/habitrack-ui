import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

const AccordionContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Accordion type="single" collapsible className="w-200">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="flex justify-center text-center text-gray-400"></AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionContainer
