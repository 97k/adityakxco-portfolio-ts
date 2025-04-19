'use client';

import { Button, Flex, Icon, Text } from '@/once-ui/components';
import { useState } from 'react';

interface File {
    name?: string;
    path: string;
    type?: string;
    thumbnail?: string;
}

interface FileDisplayProps {
    files: (string | File)[];
    title?: string;
    paddingLeft?: string;
}

export default function FileDisplay({ files, title, paddingLeft = "0" }: FileDisplayProps) {
    if (!files || files.length === 0) return null;
    
    return (
        <Flex
            fillWidth
            paddingTop="m"
            gap="16"
            direction="column">
            {title && (
                <Text variant="body-strong-s" onBackground="neutral-weak">
                    {title}
                </Text>
            )}
            
            <Flex
                fillWidth
                paddingLeft={paddingLeft}
                wrap
                gap="12">
                {files.map((file, index) => {
                    const filePath = typeof file === 'string' ? file : file.path;
                    const fileName = typeof file === 'string' 
                        ? filePath.split('/').pop() || 'Document' 
                        : file.name || filePath.split('/').pop() || 'Document';
                    const isPdf = filePath.toLowerCase().endsWith('.pdf');
                    
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap="8">
                            <Flex
                                border="neutral-medium"
                                borderStyle="solid-1"
                                radius="m"
                                minWidth={16}
                                height={9}
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.open(filePath, '_blank', 'noopener,noreferrer')}>
                                {isPdf ? (
                                    <iframe
                                        src={`${filePath}#view=FitH&toolbar=0&navpanes=0&scrollbar=0&page=1`}
                                        title={`Preview of ${fileName}`}
                                        width="100%"
                                        height="100%"
                                        style={{ 
                                            border: 'none',
                                            pointerEvents: 'none' // Prevent interaction with the PDF
                                        }}
                                    />
                                ) : (
                                    <Flex
                                        fillWidth
                                        background="neutral-medium"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Icon 
                                            name="document" 
                                            size="xl" 
                                            onBackground="neutral-weak" />
                                    </Flex>
                                )}
                            </Flex>
                            <Text
                                variant="body-strong-s"
                                onBackground="neutral-weak"
                                style={{ textAlign: 'center' }}>
                                {fileName}
                            </Text>
                        </Flex>
                    );
                })}
            </Flex>
        </Flex>
    );
} 