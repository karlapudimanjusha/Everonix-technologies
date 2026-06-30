import { createContext, useContext, useState, ReactNode } from 'react';
import RequestTalentModal from '@/components/RequestTalentModal';

interface RequestTalentContextType {
  openRequestModal: (defaultService?: string) => void;
  closeRequestModal: () => void;
}

const RequestTalentContext = createContext<RequestTalentContextType | undefined>(undefined);

export function RequestTalentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('IT Staffing');

  const openRequestModal = (service: string = 'IT Staffing') => {
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeRequestModal = () => {
    setIsOpen(false);
  };

  return (
    <RequestTalentContext.Provider value={{ openRequestModal, closeRequestModal }}>
      {children}
      <RequestTalentModal
        isOpen={isOpen}
        onClose={closeRequestModal}
        defaultService={defaultService}
      />
    </RequestTalentContext.Provider>
  );
}

export function useRequestTalent() {
  const context = useContext(RequestTalentContext);
  if (!context) {
    throw new Error('useRequestTalent must be used within a RequestTalentProvider');
  }
  return context;
}
